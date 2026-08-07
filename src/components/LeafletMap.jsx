import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Star, ArrowUpRight } from 'lucide-react';
import { formatDistance } from '../utils/geolocation.js';

// Station marker SVG icon
const createCustomStationIcon = (brand, isSelected) => {
  const color = isSelected ? '#f4901e' : '#2563eb';
  const size = isSelected ? 40 : 32;
  return L.divIcon({
    className: 'custom-station-pin',
    html: `
      <div style="
        background-color: ${color};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 11px;
        transition: transform 0.2s;
      ">
        ⛽
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
};

const userIcon = L.divIcon({
  className: 'user-pin',
  html: `
    <div style="
      background-color: #10b981;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 16px rgba(16,185,129,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    ">
      <div style="width: 8px; height: 8px; background-color: white; border-radius: 50%;"></div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

// Helper component to smoothly re-center map when userCoords change
function MapController({ center }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([center.lat, center.lng], map.getZoom(), { duration: 1 });
  }, [center.lat, center.lng, map]);
  return null;
}

export const LeafletMap = ({
  stations,
  selectedStation,
  userCoords,
  onSelectStation,
  onGetDirections,
}) => {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
      <MapContainer
        center={[userCoords.lat, userCoords.lng]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <MapController center={userCoords} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* User Location Marker */}
        <Marker position={[userCoords.lat, userCoords.lng]} icon={userIcon}>
          <Popup>
            <div className="text-xs font-bold text-slate-900 p-1">
              📍 Your Current Location
            </div>
          </Popup>
        </Marker>

        {/* Station Markers */}
        {stations.map((st) => {
          const isSelected = selectedStation?.id === st.id;
          return (
            <Marker
              key={st.id}
              position={[st.lat, st.lng]}
              icon={createCustomStationIcon(st.brand, isSelected)}
              eventHandlers={{
                click: () => onSelectStation(st),
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px] text-slate-900 font-sans">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-sm text-slate-900">{st.name}</span>
                    <span className="text-xs font-semibold text-amber-600 flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      {st.rating}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-2">{st.address}</p>

                  <div className="flex items-center justify-between text-xs border-t pt-2 border-slate-200 mt-2">
                    <span className="font-semibold text-fuel-600">
                      {st.distanceKm !== undefined ? formatDistance(st.distanceKm) : ''}
                    </span>
                    <button
                      onClick={() => onGetDirections(st)}
                      className="flex items-center gap-1 bg-fuel-500 text-slate-950 font-bold px-2.5 py-1 rounded text-xs shadow hover:bg-fuel-600"
                    >
                      <span>Directions</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
