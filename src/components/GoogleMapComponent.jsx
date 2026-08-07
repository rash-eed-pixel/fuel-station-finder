import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { Star, Navigation } from 'lucide-react';
import { formatDistance } from '../utils/geolocation.js';

export const GoogleMapComponent = ({
  apiKey,
  stations,
  selectedStation,
  userCoords,
  onSelectStation,
  onGetDirections,
}) => {
  return (
    <APIProvider apiKey={apiKey} version="weekly">
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
        <Map
          defaultCenter={{ lat: userCoords.lat, lng: userCoords.lng }}
          center={{ lat: userCoords.lat, lng: userCoords.lng }}
          defaultZoom={13}
          mapId="FUEL_STATION_MAP_ID"
          style={{ width: '100%', height: '100%' }}
        >
          {/* User Location Marker */}
          <AdvancedMarker position={{ lat: userCoords.lat, lng: userCoords.lng }}>
            <Pin background="#10b981" glyphColor="#ffffff" borderColor="#047857" />
          </AdvancedMarker>

          {/* Fuel Station Markers */}
          {stations.map((st) => {
            const isSelected = selectedStation?.id === st.id;
            return (
              <React.Fragment key={st.id}>
                <AdvancedMarker
                  position={{ lat: st.lat, lng: st.lng }}
                  onClick={() => onSelectStation(st)}
                >
                  <Pin
                    background={isSelected ? '#f4901e' : '#2563eb'}
                    glyphColor="#ffffff"
                    borderColor="#ffffff"
                    glyph="⛽"
                  />
                </AdvancedMarker>

                {isSelected && (
                  <InfoWindow
                    position={{ lat: st.lat, lng: st.lng }}
                    onCloseClick={() => onSelectStation(st)}
                  >
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
                          <Navigation className="w-3 h-3" />
                          <span>Navigate</span>
                        </button>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </React.Fragment>
            );
          })}
        </Map>
      </div>
    </APIProvider>
  );
};
