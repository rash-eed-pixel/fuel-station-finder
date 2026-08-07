import React from 'react';
import { GoogleMapComponent } from './GoogleMapComponent.jsx';
import { LeafletMap } from './LeafletMap.jsx';
import { Sparkles, Info } from 'lucide-react';
import { hasValidGoogleMapsKey } from '../utils/geolocation.js';

export const MapContainer = ({
  stations,
  selectedStation,
  userCoords,
  onSelectStation,
  onGetDirections,
}) => {
  const apiKey = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
  const hasValidKey = hasValidGoogleMapsKey(apiKey);

  return (
    <div className="relative w-full h-[500px] lg:h-full min-h-[450px] flex flex-col">
      {/* Top Map Engine Banner */}
      <div className="absolute top-3 left-3 right-3 z-30 pointer-events-none flex items-center justify-between">
        <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-fuel-400" />
          <span className="font-semibold">
            {hasValidKey ? 'Google Maps Vector Engine' : 'OpenStreetMap Interactive Engine'}
          </span>
        </div>

        {!hasValidKey && (
          <div className="hidden sm:flex pointer-events-auto bg-amber-950/90 border border-amber-700/80 text-amber-200 px-3 py-1.5 rounded-xl text-[11px] items-center gap-1.5 shadow-lg">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Add <code>GOOGLE_MAPS_PLATFORM_KEY</code> in Secrets to enable Google Maps</span>
          </div>
        )}
      </div>

      {/* Render Map */}
      <div className="flex-1 w-full h-full">
        {hasValidKey ? (
          <GoogleMapComponent
            apiKey={apiKey}
            stations={stations}
            selectedStation={selectedStation}
            userCoords={userCoords}
            onSelectStation={onSelectStation}
            onGetDirections={onGetDirections}
          />
        ) : (
          <LeafletMap
            stations={stations}
            selectedStation={selectedStation}
            userCoords={userCoords}
            onSelectStation={onSelectStation}
            onGetDirections={onGetDirections}
          />
        )}
      </div>
    </div>
  );
};
