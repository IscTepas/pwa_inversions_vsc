import { useCallback, useState } from 'react'
import { useBrokerStore } from '@/store/brokerStore'
import { IBKRConnector } from '@/services/broker/ibkr.connector'

export const useBroker = () => {
  const [connecting, setConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const connected = useBrokerStore((state) => state.connected)
  const account = useBrokerStore((state) => state.account)
  const setConnected = useBrokerStore((state) => state.setConnected)
  const setAccount = useBrokerStore((state) => state.setAccount)
  const selectedBroker = useBrokerStore((state) => state.selectedBroker)
  const setSelectedBroker = useBrokerStore((state) => state.setSelectedBroker)

  const connect = useCallback(async (broker: 'alpaca' | 'mock' | 'ibkr' = 'mock') => {
    setConnecting(true)
    setError(null)

    try {
      const connector = new IBKRConnector({
        port: broker === 'ibkr' ? 7496 : 7497,
        clientId: 1,
        connectionType: broker === 'ibkr' ? 'live' : 'paper',
      })
      await connector.connect()

      const accountInfo = await connector.getAccount()
      setSelectedBroker(broker === 'ibkr' ? 'alpaca' : broker)
      setAccount(accountInfo)
      setConnected(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Connection failed'
      setError(message)
      setConnected(false)
    } finally {
      setConnecting(false)
    }
  }, [setConnected, setAccount, setSelectedBroker])

  const disconnect = useCallback(async () => {
    try {
      const connector = new IBKRConnector()
      await connector.disconnect()
      setConnected(false)
    } catch (err) {
      console.error('Disconnect error:', err)
    }
  }, [setConnected])

  return {
    connected,
    connecting,
    error,
    account,
    selectedBroker,
    connect,
    disconnect,
  }
}
