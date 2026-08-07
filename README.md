# ⛽ NaijaFuel — Fuel Station Finder & Stock Tracker (Nigeria)

**3MTT Capstone Project**

NaijaFuel is a real-time, location-aware fuel station finder for Nigeria. It helps drivers
locate nearby PMS (petrol), AGO (diesel), CNG, kerosene, and EV charging stations, see
crowdsourced fuel availability and pump prices, get turn-by-turn directions, and estimate
trip fuel costs — all from a single responsive web app.

---

## 1. Problem Statement

Fuel scarcity and price volatility are recurring challenges for Nigerian motorists. Drivers
often waste time and fuel searching for stations that actually have stock, and pump prices
can vary significantly between stations in the same city. There is no single, trusted,
crowd-verified source that shows **where fuel is currently available** and **at what price**
in real time.

## 2. Objective

Build a web application that:

- Locates fuel stations near the user (GPS or manual city selection) across all 36 states + FCT
- Displays **live, crowdsourced** fuel stock status (in stock / low stock / out of stock) and pump prices
- Lets drivers **report** fuel availability and prices to help other drivers
- Provides filtering (fuel type, amenities, rating, distance, open-now) and sorting
- Offers turn-by-turn navigation to a selected station
- Includes a **trip fuel cost calculator** with CO₂ emissions estimate
- Lets drivers save favorite stations and manage a driver/vehicle profile

## 3. Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 19 (function components + hooks) |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Maps (default) | Leaflet + React-Leaflet (OpenStreetMap tiles — no API key needed) |
| Maps (optional upgrade) | Google Maps Platform via `@vis.gl/react-google-maps` |
| Language | JavaScript (JSX) |
| Linting | ESLint 9 (flat config) with React + React Hooks rules |

The app ships with a mock dataset (`src/data/mockStations.js`) covering **all 36 states plus the
FCT** — 45 stations across real Nigerian marketer brands (TotalEnergies, NNPC Retail, Ardova,
Conoil, MRS, Oando, NIPCO, Bovas, Rainoil, AA Rano, Northwest Petroleum & Gas, Enyo Retail).
Petrol and diesel prices are anchored to real August 2026 Nigerian market pump-price ranges
(₦1,165–₦1,340/L for PMS, ₦1,570–₦1,820/L for AGO, cheaper in the South West/South South,
pricier in the North East/North West, reflecting real transport-cost patterns) — enough to
demo every feature convincingly without any backend or paid API key.

> **Note:** this is illustrative demo data for the capstone build, not a live-scraped feed.
> Prices/stations are static and reset on page refresh (see Known Limitations below).

## 4. Key Features

- 🗺️ **Interactive map** — Leaflet by default, automatically upgrades to Google Maps if a
  valid `GOOGLE_MAPS_PLATFORM_KEY` is supplied
- 📍 **Geolocation** — "Use My GPS Location" button, plus 17 preset Nigerian city shortcuts
- 🔎 **Search & filters** — by name/brand/address, fuel type, amenities, minimum rating,
  "open now", and search radius (10 km to nationwide)
- 📡 **Live Community Feed** — a real-time stream of driver-submitted stock reports
- 📝 **Report Fuel Stock** — any driver can update a station's fuel status and price
- ❤️ **Favorites** — bookmark stations for quick access
- 🧮 **Trip Fuel Cost Calculator** — estimates liters/kWh needed, total cost in ₦, and CO₂
  emissions for a trip, and recommends the cheapest available station for the chosen fuel
- 👤 **Driver Profile** — vehicle details, preferred fuel, tank capacity, and mileage used to
  personalize calculations
- 🔔 **Toast notifications** for key actions (favorites, GPS, reports, profile updates)
- 📱 **Fully responsive** — split / list / map view modes with a mobile filter drawer

## 5. Project Structure

```
fuel-station-finder/
├── src/
│   ├── App.jsx                  # Top-level state, routing between tabs, filtering logic
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Tailwind + Leaflet base styles
│   ├── types.js                 # Single source of truth: fuel types & amenities
│   ├── data/
│   │   └── mockStations.js      # Seed data: stations + community reports
│   ├── utils/
│   │   ├── geolocation.js       # Haversine distance, formatting, presets, status styles
│   │   └── fuelCalculator.js    # Trip cost & CO2 estimate logic
│   └── components/
│       ├── Navbar.jsx, HeroSection.jsx, Footer.jsx, Toast.jsx
│       ├── SearchBar.jsx, FilterPanel.jsx
│       ├── MapContainer.jsx, LeafletMap.jsx, GoogleMapComponent.jsx
│       ├── StationCard.jsx, StationDetailsModal.jsx, ReportFuelModal.jsx
│       ├── CommunityFeed.jsx, FavoritesView.jsx, ProfileView.jsx
│       └── RoutePlannerModal.jsx
├── index.html
├── vite.config.ts
├── package.json
└── .env.example
```

## 6. Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. (Optional) configure a Google Maps key
cp .env.example .env.local
# then edit .env.local and set GOOGLE_MAPS_PLATFORM_KEY if you have one
# — the app works fully without it, using the free OpenStreetMap map engine.

# 3. Run the dev server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Other scripts

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```

## 7. How It Works (Architecture Notes)

- **State management**: all app state (stations, filters, favorites, active tab, toasts,
  user profile) lives in `App.jsx` via `useState`/`useMemo` and is passed down as props —
  appropriate for an app of this size without needing a global store.
- **Distance & sorting**: `calculateDistanceKm` (Haversine formula) recalculates every
  station's distance from the active location on each render via `useMemo`, then filters
  are applied in a single pipeline (search → radius → rating → open-now → fuel type →
  availability → amenities) before sorting.
- **Map engine fallback**: `MapContainer.jsx` checks for a valid `GOOGLE_MAPS_PLATFORM_KEY`
  using `hasValidGoogleMapsKey()` and renders `GoogleMapComponent` or `LeafletMap`
  accordingly — so the app is fully functional with zero paid API keys.
- **Single source of truth**: fuel types and station amenities (with their display labels
  and icons) are defined once in `src/types.js` and imported everywhere they're needed
  (search filters, report form, station details, profile preferences) instead of being
  duplicated per component.

## 8. Known Limitations / Future Work

- Data is in-memory mock data (resets on page refresh) — a production version would use a
  real backend/database (e.g. Firebase, Supabase, or a Node/Express API) for persistence
  and user authentication.
- Fuel stock reports are not currently moderated/verified beyond a "Verified Driver" label.
- No automated test suite yet — a good next step would be adding component tests with
  Vitest + React Testing Library.

## 9. License

This project is licensed under the [MIT License](./LICENSE).

## 10. Author

Built as a capstone project for the **3 Million Technical Talent (3MTT)** programme.
