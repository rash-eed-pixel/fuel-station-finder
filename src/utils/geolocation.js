import { FUEL_TYPE_OPTIONS } from '../types.js';

// Calculate distance in km between two lat/lng points using Haversine formula
export function calculateDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // 1 decimal place
}

// Format distance string
export function formatDistance(km) {
  if (km === undefined) return 'N/A';
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

// Format relative time
export function formatRelativeTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMinutes < 1) return 'Just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return 'Yesterday';
  return `${diffDays}d ago`;
}

// Get user friendly fuel name tailored for Nigerian market
export function getFuelTypeName(type) {
  const match = FUEL_TYPE_OPTIONS.find((f) => f.type === type);
  return match ? match.label : type;
}

// Get badge color for availability status
export function getStatusBadgeStyle(status) {
  switch (status) {
    case 'available':
      return { bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400', text: 'emerald', label: 'In Stock' };
    case 'low_stock':
      return { bg: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400', text: 'amber', label: 'Low Queue/Stock' };
    case 'out_of_stock':
      return { bg: 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-400', text: 'rose', label: 'Out of Stock' };
    default:
      return { bg: 'bg-slate-500/10 border-slate-500/30 text-slate-700 dark:text-slate-400', text: 'slate', label: 'Unconfirmed' };
  }
}

// All 36 states + FCT, grouped by Nigeria's 6 geopolitical zones.
// "name" is the state's capital or main commercial hub (whichever drivers
// actually search for) so every state in the federation is searchable.
export const PRESET_LOCATIONS = [
  // North Central
  { name: 'Abuja (FCT CBD)', state: 'FCT Abuja', zone: 'North Central', coords: { lat: 9.0765, lng: 7.3986, addressName: 'Abuja, FCT' } },
  { name: 'Makurdi', state: 'Benue State', zone: 'North Central', coords: { lat: 7.7322, lng: 8.5391, addressName: 'Makurdi, Benue' } },
  { name: 'Lokoja', state: 'Kogi State', zone: 'North Central', coords: { lat: 7.8023, lng: 6.7337, addressName: 'Lokoja, Kogi' } },
  { name: 'Ilorin', state: 'Kwara State', zone: 'North Central', coords: { lat: 8.4799, lng: 4.5418, addressName: 'Ilorin, Kwara' } },
  { name: 'Lafia', state: 'Nasarawa State', zone: 'North Central', coords: { lat: 8.4939, lng: 8.5163, addressName: 'Lafia, Nasarawa' } },
  { name: 'Minna', state: 'Niger State', zone: 'North Central', coords: { lat: 9.6139, lng: 6.5569, addressName: 'Minna, Niger' } },
  { name: 'Jos', state: 'Plateau State', zone: 'North Central', coords: { lat: 9.8965, lng: 8.8583, addressName: 'Jos, Plateau' } },

  // North East
  { name: 'Yola', state: 'Adamawa State', zone: 'North East', coords: { lat: 9.2035, lng: 12.4954, addressName: 'Yola, Adamawa' } },
  { name: 'Bauchi', state: 'Bauchi State', zone: 'North East', coords: { lat: 10.3103, lng: 9.8439, addressName: 'Bauchi, Bauchi' } },
  { name: 'Maiduguri', state: 'Borno State', zone: 'North East', coords: { lat: 11.8333, lng: 13.1500, addressName: 'Maiduguri, Borno' } },
  { name: 'Gombe', state: 'Gombe State', zone: 'North East', coords: { lat: 10.2897, lng: 11.1673, addressName: 'Gombe, Gombe' } },
  { name: 'Jalingo', state: 'Taraba State', zone: 'North East', coords: { lat: 8.8833, lng: 11.3667, addressName: 'Jalingo, Taraba' } },
  { name: 'Damaturu', state: 'Yobe State', zone: 'North East', coords: { lat: 11.7470, lng: 11.9610, addressName: 'Damaturu, Yobe' } },

  // North West
  { name: 'Dutse', state: 'Jigawa State', zone: 'North West', coords: { lat: 11.7561, lng: 9.3392, addressName: 'Dutse, Jigawa' } },
  { name: 'Kaduna (Central)', state: 'Kaduna State', zone: 'North West', coords: { lat: 10.5105, lng: 7.4165, addressName: 'Kaduna, Nigeria' } },
  { name: 'Kano (Kano City)', state: 'Kano State', zone: 'North West', coords: { lat: 12.0022, lng: 8.5920, addressName: 'Kano, Nigeria' } },
  { name: 'Katsina', state: 'Katsina State', zone: 'North West', coords: { lat: 12.9908, lng: 7.6018, addressName: 'Katsina, Katsina' } },
  { name: 'Birnin Kebbi', state: 'Kebbi State', zone: 'North West', coords: { lat: 12.4536, lng: 4.1975, addressName: 'Birnin Kebbi, Kebbi' } },
  { name: 'Sokoto', state: 'Sokoto State', zone: 'North West', coords: { lat: 13.0059, lng: 5.2476, addressName: 'Sokoto, Nigeria' } },
  { name: 'Gusau', state: 'Zamfara State', zone: 'North West', coords: { lat: 12.1704, lng: 6.6641, addressName: 'Gusau, Zamfara' } },

  // South East
  { name: 'Umuahia', state: 'Abia State', zone: 'South East', coords: { lat: 5.5250, lng: 7.4860, addressName: 'Umuahia, Abia' } },
  { name: 'Awka', state: 'Anambra State', zone: 'South East', coords: { lat: 6.2126, lng: 7.0742, addressName: 'Awka, Anambra' } },
  { name: 'Abakaliki', state: 'Ebonyi State', zone: 'South East', coords: { lat: 6.3249, lng: 8.1137, addressName: 'Abakaliki, Ebonyi' } },
  { name: 'Enugu (Ogui Rd)', state: 'Enugu State', zone: 'South East', coords: { lat: 6.4584, lng: 7.5464, addressName: 'Enugu, Nigeria' } },
  { name: 'Owerri', state: 'Imo State', zone: 'South East', coords: { lat: 5.4836, lng: 7.0333, addressName: 'Owerri, Imo' } },

  // South South
  { name: 'Uyo', state: 'Akwa Ibom State', zone: 'South South', coords: { lat: 5.0377, lng: 7.9128, addressName: 'Uyo, Akwa Ibom' } },
  { name: 'Yenagoa', state: 'Bayelsa State', zone: 'South South', coords: { lat: 4.9247, lng: 6.2642, addressName: 'Yenagoa, Bayelsa' } },
  { name: 'Calabar', state: 'Cross River State', zone: 'South South', coords: { lat: 4.9757, lng: 8.3417, addressName: 'Calabar, Cross River' } },
  { name: 'Warri', state: 'Delta State', zone: 'South South', coords: { lat: 5.5544, lng: 5.7932, addressName: 'Warri, Delta' } },
  { name: 'Benin City', state: 'Edo State', zone: 'South South', coords: { lat: 6.3350, lng: 5.6037, addressName: 'Benin City, Edo' } },
  { name: 'Port Harcourt', state: 'Rivers State', zone: 'South South', coords: { lat: 4.8156, lng: 7.0498, addressName: 'Port Harcourt, Rivers' } },

  // South West
  { name: 'Ado-Ekiti', state: 'Ekiti State', zone: 'South West', coords: { lat: 7.6211, lng: 5.2214, addressName: 'Ado-Ekiti, Ekiti' } },
  { name: 'Lagos (Ikeja & VI)', state: 'Lagos State', zone: 'South West', coords: { lat: 6.5244, lng: 3.3792, addressName: 'Lagos, Nigeria' } },
  { name: 'Abeokuta', state: 'Ogun State', zone: 'South West', coords: { lat: 7.1475, lng: 3.3619, addressName: 'Abeokuta, Ogun' } },
  { name: 'Akure', state: 'Ondo State', zone: 'South West', coords: { lat: 7.2526, lng: 5.1931, addressName: 'Akure, Ondo' } },
  { name: 'Osogbo', state: 'Osun State', zone: 'South West', coords: { lat: 7.7719, lng: 4.5569, addressName: 'Osogbo, Osun' } },
  { name: 'Ibadan (Bodija)', state: 'Oyo State', zone: 'South West', coords: { lat: 7.3775, lng: 3.9470, addressName: 'Ibadan, Oyo' } },
];

// Whether a usable Google Maps Platform key has been provided via env vars.
// Falls back to the free OpenStreetMap/Leaflet engine when this is false.
export function hasValidGoogleMapsKey(key) {
  return Boolean(key) && key !== 'YOUR_API_KEY' && key.length > 5;
}
