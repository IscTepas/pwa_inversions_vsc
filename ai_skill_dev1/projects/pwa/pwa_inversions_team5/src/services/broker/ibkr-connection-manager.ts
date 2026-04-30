import { IBKRConnector } from './ibkr.connector'
import { IBKRConnectionConfig, IBKRConnectionState, IBKREventName } from './ibkr.types'

export type ConnectionState = 'disconnected' | 'connecting' | 'connected' | 'reconnecting' | 'error'

export interface ConnectionManagerConfig extends Partial<IBKRConnectionConfig> {
  maxReconnectAttempts?: number
  reconnectDelay?: number
  reconnectDelayMax?: number
  enableAutoReconnect?: boolean
}

const DEFAULT_MANAGER_CONFIG = {
  maxReconnectAttempts: 10,
  reconnectDelay: 2000,
  reconnectDelayMax: 30000,
  enableAutoReconnect: true,
}

type EventHandler = (...args: any[]) => void

export class IBKRConnectionManager {
  private connector: IBKRConnector
  private config: ConnectionManagerConfig & Required<Pick<ConnectionManagerConfig, 'maxReconnectAttempts' | 'reconnectDelay' | 'reconnectDelayMax' | 'enableAutoReconnect'>>
  private eventHandlers: Map<IBKREventName, EventHandler[]> = new Map()
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null
  private reconnectAttempt: number = 0
  private destroyed: boolean = false
  private connectionCheckInterval: ReturnType<typeof setInterval> | null = null

  constructor(config?: ConnectionManagerConfig) {
    this.config = { ...DEFAULT_MANAGER_CONFIG, ...config } as ConnectionManagerConfig & Required<Pick<ConnectionManagerConfig, 'maxReconnectAttempts' | 'reconnectDelay' | 'reconnectDelayMax' | 'enableAutoReconnect'>>
    this.connector = new IBKRConnector(config)
  }

  async connect(): Promise<void> {
    if (this.destroyed) {
      throw new Error('ConnectionManager has been destroyed')
    }

    this.reconnectAttempt = 0
    await this.attemptConnect()
  }

  private async attemptConnect(): Promise<void> {
    if (this.destroyed) return

    try {
      this.emit('connected', this.connector.getConnectionState())
      await this.connector.connect()

      if (this.connector.isConnected()) {
        this.reconnectAttempt = 0
        this.startConnectionMonitor()
        this.emit('connected', this.connector.getConnectionState())
        console.log('✅ IBKR Connection Manager: connected')
      }
    } catch (error) {
      this.emit('error', error)

      if (this.config.enableAutoReconnect && !this.destroyed) {
        this.scheduleReconnect()
      } else {
        this.emit('disconnected', this.connector.getConnectionState())
      }
    }
  }

  private scheduleReconnect(): void {
    if (this.destroyed) return

    this.reconnectAttempt++

    if (this.reconnectAttempt > this.config.maxReconnectAttempts) {
      console.error(`❌ IBKR: Max reconnect attempts (${this.config.maxReconnectAttempts}) reached`)
      this.emit('error', new Error('Max reconnect attempts reached'))
      this.emit('disconnected', this.connector.getConnectionState())
      return
    }

    const delay = Math.min(
      this.config.reconnectDelay * Math.pow(2, this.reconnectAttempt - 1),
      this.config.reconnectDelayMax
    )

    console.log(`🔄 IBKR: Reconnecting in ${delay}ms (attempt ${this.reconnectAttempt}/${this.config.maxReconnectAttempts})`)
    this.emit('reconnecting', {
      attempt: this.reconnectAttempt,
      maxAttempts: this.config.maxReconnectAttempts,
      delay,
    })

    this.reconnectTimer = setTimeout(() => {
      this.attemptConnect()
    }, delay)
  }

  private startConnectionMonitor(): void {
    this.stopConnectionMonitor()

    this.connectionCheckInterval = setInterval(() => {
      if (this.destroyed) return

      if (!this.connector.isConnected()) {
        this.stopConnectionMonitor()
        this.emit('disconnected', this.connector.getConnectionState())

        if (this.config.enableAutoReconnect) {
          this.scheduleReconnect()
        }
      }
    }, 30000)
  }

  private stopConnectionMonitor(): void {
    if (this.connectionCheckInterval) {
      clearInterval(this.connectionCheckInterval)
      this.connectionCheckInterval = null
    }
  }

  async disconnect(): Promise<void> {
    this.destroyed = false
    this.stopConnectionMonitor()

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }

    this.reconnectAttempt = 0

    await this.connector.disconnect()
    this.emit('disconnected', this.connector.getConnectionState())
    console.log('❌ IBKR Connection Manager: disconnected')
  }

  destroy(): void {
    this.destroyed = true
    this.stopConnectionMonitor()

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }

    this.eventHandlers.clear()
    console.log('💀 IBKR Connection Manager: destroyed')
  }

  getConnector(): IBKRConnector {
    return this.connector
  }

  getState(): IBKRConnectionState {
    return this.connector.getConnectionState()
  }

  isConnected(): boolean {
    return this.connector.isConnected()
  }

  isMockMode(): boolean {
    return this.connector.isMockMode()
  }

  on(event: IBKREventName, handler: EventHandler): void {
    const handlers = this.eventHandlers.get(event) || []
    handlers.push(handler)
    this.eventHandlers.set(event, handlers)
  }

  off(event: IBKREventName, handler: EventHandler): void {
    const handlers = this.eventHandlers.get(event) || []
    const index = handlers.indexOf(handler)
    if (index >= 0) {
      handlers.splice(index, 1)
      this.eventHandlers.set(event, handlers)
    }
  }

  private emit(event: IBKREventName, ...args: any[]): void {
    const handlers = this.eventHandlers.get(event) || []
    for (const handler of handlers) {
      try {
        handler(...args)
      } catch (error) {
        console.error(`Error in IBKR event handler for ${event}:`, error)
      }
    }
  }

  getReconnectInfo(): {
    attempts: number
    maxAttempts: number
    nextDelay?: number
  } {
    const nextDelay = this.reconnectAttempt > 0 && this.reconnectAttempt < this.config.maxReconnectAttempts
      ? Math.min(
          this.config.reconnectDelay * Math.pow(2, this.reconnectAttempt - 1),
          this.config.reconnectDelayMax
        )
      : undefined

    return {
      attempts: this.reconnectAttempt,
      maxAttempts: this.config.maxReconnectAttempts,
      nextDelay,
    }
  }
}
