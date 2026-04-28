import { create } from 'zustand';

interface Settings {
  theme: 'dark' | 'light';
  autoTrade: boolean;
  maxPositions: number;
  maxDailyLoss: number;
  riskPercentage: number;
  pullToRefresh: boolean;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  apiTimeout: number;
  retryAttempts: number;
}

interface SettingsState {
  settings: Settings;
  
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  updateNotificationSettings: (notifications: Settings['notifications']) => void;
  resetToDefaults: () => void;
  loadSettings: (settings: Partial<Settings>) => void;
}

const DEFAULT_SETTINGS: Settings = {
  theme: 'dark',
  autoTrade: false,
  maxPositions: 10,
  maxDailyLoss: 500,
  riskPercentage: 2,
  pullToRefresh: true,
  notifications: {
    email: true,
    sms: false,
    push: true,
  },
  apiTimeout: 30000,
  retryAttempts: 3,
};

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: DEFAULT_SETTINGS,

  updateSetting: (key, value) =>
    set((state) => ({
      settings: {
        ...state.settings,
        [key]: value,
      },
    })),

  updateNotificationSettings: (notifications) =>
    set((state) => ({
      settings: {
        ...state.settings,
        notifications,
      },
    })),

  resetToDefaults: () =>
    set(() => ({
      settings: { ...DEFAULT_SETTINGS },
    })),

  loadSettings: (newSettings) =>
    set((state) => ({
      settings: {
        ...state.settings,
        ...newSettings,
      },
    })),
}));
