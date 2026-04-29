import { create } from 'zustand';
import { Position } from '@/types/broker.types';

interface PositionsState {
  positions: Position[];
  selectedPosition: Position | null;
  
  setPositions: (positions: Position[]) => void;
  addPosition: (position: Position) => void;
  updatePosition: (symbol: string, position: Position) => void;
  removePosition: (symbol: string) => void;
  setSelectedPosition: (position: Position | null) => void;
  getPosition: (symbol: string) => Position | undefined;
}

export const usePositionsStore = create<PositionsState>((set, get) => ({
  positions: [],
  selectedPosition: null,

  setPositions: (positions) => set({ positions }),

  addPosition: (position) =>
    set((state) => ({
      positions: [
        ...state.positions.filter((p) => p.symbol !== position.symbol),
        position,
      ],
    })),

  updatePosition: (symbol, position) =>
    set((state) => ({
      positions: state.positions.map((p) => (p.symbol === symbol ? position : p)),
    })),

  removePosition: (symbol) =>
    set((state) => ({
      positions: state.positions.filter((p) => p.symbol !== symbol),
      selectedPosition:
        state.selectedPosition?.symbol === symbol ? null : state.selectedPosition,
    })),

  setSelectedPosition: (position) => set({ selectedPosition: position }),

  getPosition: (symbol) => get().positions.find((p) => p.symbol === symbol),
}));
