# PWA Inversions v1.0 - Investment Platform with AI

Progressive Web App for algorithmic investment analysis, combining technical indicators, institutional flow detection, AI confirmation, and semi-automated trading execution.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run E2E tests
npm run test:e2e
```

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, static files
├── components/      # Reusable UI components
├── features/        # Feature-specific modules
│   ├── dashboard/   # Main dashboard layout
│   ├── watchlist/   # Symbol watchlist
│   ├── strategy/    # Strategy management
│   ├── trading/     # Chart and technical analysis
│   ├── signals/     # Signal detection and display
│   └── positions/   # Open positions management
├── services/        # Business logic services
│   ├── broker/      # Broker connectors (IBKR, Alpaca)
│   ├── market-data/ # Real-time quotes and candles
│   ├── indicators/  # Technical indicators (RSI, MACD, etc)
│   ├── cores/       # Analysis cores (structure, institutional, etc)
│   ├── confluence/  # Signal combination engine
│   ├── ai/          # Claude API integration
│   ├── orders/      # Order management
│   └── alerts/      # Alert system
├── store/           # Zustand state management
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── hooks/           # React custom hooks
└── styles/          # Global CSS and TailwindCSS
```

## 🔐 Configuration

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required variables:
- **Alpaca**: `ALPACA_API_KEY`, `ALPACA_SECRET_KEY`
- **Claude API**: `VITE_CLAUDE_API_KEY`
- **IBKR** (optional): `IBKR_HOST`, `IBKR_PORT`, `IBKR_ACCOUNT_ID`

## 📊 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS (dark theme)
- **State Management**: Zustand
- **Charts**: TradingView Lightweight Charts
- **Technical Analysis**: technicalindicators npm
- **AI**: Claude API (@anthropic-ai/sdk)
- **Brokers**: Alpaca (@alpacahq/alpaca-trade-api), Interactive Brokers (@stoqey/ib)
- **Testing**: Vitest + Playwright

## 🎯 Phase 1 Deliverables (v1.0)

- ✅ Base project setup
- 🔄 Broker connector (IBKR + Alpaca)
- 🔄 Market data streaming
- 🔄 Technical indicators (RSI, MACD, Bollinger, EMA, ATR, Volume)
- 🔄 Analysis cores (6 cores)
- 🔄 Signal generation and UI
- 🔄 Strategy management
- 🔄 Order management
- 🔄 Testing suite

## 📝 Tickets Tracking

See tickets in [ai_skill_dev1/ai_global/tickets/TKT-INVRFIC-*.md](../../ai_skill_dev1/ai_global/tickets/)

## 📞 Support

Questions? Check the [SPECIFICATION.md](../../ai_skill_dev1/projects/pwa/pwa_inversions_team5/ai_work_flow/docs/specs/SPECIFICATION.md) for full details.

---

**Created**: 2026-04-28  
**Author**: Dr. Francisco Ibarra Carlos  
**Version**: 1.0.0  
**License**: MIT
