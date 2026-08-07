// Central data dictionary for Fuel Types & Amenities.
// Every component pulls its labels/icons from here so the app has a single
// source of truth (previously each component duplicated its own copy,
// which caused CNG station listings to be missing from the Filter Panel).

export const FUEL_TYPES = {
  PETROL: 'petrol',
  PREMIUM_PETROL: 'premium_petrol',
  DIESEL: 'diesel',
  CNG: 'cng',
  KEROSENE: 'kerosene',
  EV: 'ev',
};

// Full metadata for every supported fuel/energy type.
export const FUEL_TYPE_OPTIONS = [
  { type: 'petrol', label: 'PMS Petrol', formLabel: 'PMS (Petrol)', badge: '⛽' },
  { type: 'premium_petrol', label: 'V-Power Petrol', formLabel: 'High-Octane V-Power Petrol', badge: '🏎️' },
  { type: 'diesel', label: 'AGO Diesel', formLabel: 'AGO (Diesel)', badge: '🚚' },
  { type: 'cng', label: 'CNG Gas', formLabel: 'CNG (Compressed Natural Gas)', badge: '🔥' },
  { type: 'kerosene', label: 'DPK Kerosene', formLabel: 'DPK (Kerosene)', badge: '🛢️' },
  { type: 'ev', label: 'EV Charge', formLabel: 'EV Fast Charging', badge: '⚡' },
];

// Full metadata for every supported station amenity.
export const AMENITY_OPTIONS = [
  { key: 'atm', label: 'ATM Cash Machine', shortLabel: 'ATM', icon: '🏧' },
  { key: 'washroom', label: 'Clean Washrooms', icon: '🚻' },
  { key: 'store', label: 'Convenience Store', icon: '🏪' },
  { key: 'ev_fast_charger', label: 'EV Fast Charger', icon: '⚡' },
  { key: 'air_water', label: 'Free Air & Water', icon: '🛞' },
  { key: 'cafe', label: 'Coffee / Cafe', shortLabel: 'Cafe / Coffee', icon: '☕' },
  { key: 'car_wash', label: 'Car Wash', icon: '🧼' },
  { key: 'mechanic', label: 'Auto Repair/Mechanic', shortLabel: 'Mechanic / Service', icon: '🔧' },
  { key: 'cng_station', label: 'CNG Dispenser', icon: '🔥' },
];

// Kept for any code that only needs the raw amenity keys (e.g. validation).
export const AMENITIES = AMENITY_OPTIONS.map((a) => a.key);
