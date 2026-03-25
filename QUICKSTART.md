# DailyBasis Tracker - Quick Start Guide

## Installation & Running

### Option 1: Docker (Recommended)

```bash
docker-compose up
```

The app will be available at http://localhost:3000

### Option 2: Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
dailyBasisTracker/
├── src/
│   ├── App.jsx                    # Root component with routing
│   ├── main.jsx                   # Entry point
│   ├── context/
│   │   └── CycleContext.jsx       # Global cycle state management
│   ├── design/
│   │   ├── tokens.js              # Design system colors & fonts
│   │   ├── globalStyles.js        # Global CSS
│   │   └── components/            # Reusable UI components
│   │       ├── index.js
│   │       ├── Navbar.jsx
│   │       ├── PhaseBadge.jsx
│   │       ├── PrimaryButton.jsx
│   │       ├── OutlineButton.jsx
│   │       ├── Card.jsx
│   │       ├── Typography.jsx
│   │       ├── DateInput.jsx
│   │       ├── Divider.jsx
│   │       ├── Chip.jsx
│   │       ├── PageLayout.jsx
│   │       ├── AnnouncementBanner.jsx
│   │       ├── SupplementCard.jsx
│   │       ├── TodayHero.jsx
│   │       └── CalendarDay.jsx
│   ├── hooks/
│   │   ├── useCycle.js            # Access cycle context
│   │   └── useLocalStorage.js     # localStorage hook
│   ├── utils/
│   │   ├── cycleCalculations.js   # Cycle day & phase logic
│   │   ├── storage.js             # localStorage helpers
│   │   └── dateHelpers.js         # Date formatting utilities
│   └── views/
│       ├── TodayView.jsx          # Daily supplement recommendation
│       ├── CalendarView.jsx       # Monthly cycle calendar
│       └── SettingsView.jsx       # Cycle configuration
├── index.html                     # HTML template with Google Fonts
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── docker-compose.yaml            # Docker setup
└── README.md                      # Project documentation
```

## Features Implemented

### ✅ Today View
- Shows current supplement recommendation (DB1 or DB2)
- Displays cycle day and phase
- Shows days remaining in current phase
- Prompts to update cycle after 30 days
- Product information cards
- Link to DailyBasis shop

### ✅ Calendar View
- Monthly calendar with cycle days color-coded
- Burgundy (DB1) for days 1-14
- Gold (DB2) for days 15-28
- Today's date highlighted
- Phase legend

### ✅ Settings View
- Set/update period start date
- View current cycle information
- Reset all data option
- App information & links

### ✅ Core Functionality
- Automatic cycle day calculation
- localStorage persistence
- Responsive design (mobile-first)
- Phase-based color theming
- Navigation between views

## Technical Details

### Dependencies
- **React 18.2.0** - UI framework
- **React Router DOM 6.22.0** - Client-side routing
- **date-fns 3.3.1** - Date manipulation
- **Vite 5.1.0** - Build tool

### Design System
- **Colors**: Burgundy (#6B2737) for DB1, Gold (#BD7C2C) for DB2
- **Fonts**: Cormorant Garamond (display), DM Sans (body)
- **Layout**: Mobile-first, max-width 480px
- **Style**: Inline styles for simplicity

### State Management
- React Context API for global cycle state
- localStorage for data persistence
- Custom hooks for reusability

## Usage Flow

1. **First Launch**: User enters period start date in Settings
2. **Today View**: Shows which supplement to take today
3. **Calendar View**: Visual overview of entire cycle
4. **Daily Use**: Open app to see today's recommendation
5. **New Cycle**: Update start date when period begins again

## Data Storage

All data is stored locally in browser localStorage:

```json
{
  "dailybasis_cycle": {
    "startDate": "2026-03-01",
    "cycleLength": 30,
    "lastUpdated": "2026-03-10T12:00:00Z"
  }
}
```

## Development Notes

- No external API calls (fully offline capable)
- No authentication required
- No backend needed
- Works in any modern browser
- Data never leaves user's device

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Next Steps / Future Enhancements

Per the README.md, potential future features include:
- Push notifications for daily reminders
- Symptom tracker tied to cycle days
- Multi-cycle insights dashboard
- Apple Health / Google Fit integration
- Account system with cloud sync
