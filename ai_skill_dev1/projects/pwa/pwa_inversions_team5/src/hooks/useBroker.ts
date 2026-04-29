import { useCallback, useState } from 'react';
import { useBrokerStore } from '@/store/brokerStore';
import { AlpacaBrokerConnector } from '@/services/broker/alpaca.connector';
import { MockBrokerConnector } from '@/services/broker/mock.connector';

export const useBroker = () => {
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const connected = useBrokerStore((state) => state.connected);
  const account = useBrokerStore((state) => state.account);
  const setConnected = useBrokerStore((state) => state.setConnected);
  const setAccount = useBrokerStore((state) => state.setAccount);
  const selectedBroker = useBrokerStore((state) => state.selectedBroker);
  const setSelectedBroker = useBrokerStore((state) => state.setSelectedBroker);

  const connect = useCallback(async (broker: 'alpaca' | 'mock' = 'mock') => {
    setConnecting(true);
    setError(null);

    try {
      const connector = broker === 'alpaca' ? new AlpacaBrokerConnector() : new MockBrokerConnector();
      await connector.connect();

      const accountInfo = await connector.getAccount();
      setSelectedBroker(broker);
      setAccount(accountInfo);
      setConnected(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Connection failed';
      setError(message);
      setConnected(false);
    } finally {
      setConnecting(false);
    }
  }, [setConnected, setAccount, setSelectedBroker]);

  const disconnect = useCallback(async () => {
    try {
      const connector = selectedBroker === 'alpaca' ? new AlpacaBrokerConnector() : new MockBrokerConnector();
      await connector.disconnect();
      setConnected(false);
    } catch (err) {
      console.error('Disconnect error:', err);
    }
  }, [selectedBroker, setConnected]);

  return {
    connected,
    connecting,
    error,
    account,
    selectedBroker,
    connect,
    disconnect,
  };
};
