import React from 'react';
import { StationCard } from './StationCard.jsx';
import { Heart } from 'lucide-react';

export const FavoritesView = ({
  favoriteStations,
  selectedStation,
  onSelectStation,
  onToggleFavorite,
  onOpenReportModal,
  onGetDirections,
}) => {
  if (favoriteStations.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
          <Heart className="w-8 h-8 text-rose-500/50" />
        </div>
        <h3 className="text-xl font-bold text-white">No Saved Stations Yet</h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Click the heart icon on any fuel station card to bookmark it for quick access, offline price checks, and instant navigation.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-white">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl">
            <Heart className="w-6 h-6 fill-rose-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Saved Favorite Stations</h2>
            <p className="text-xs text-slate-400">
              {favoriteStations.length} station{favoriteStations.length === 1 ? '' : 's'} bookmarked for fast navigation
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {favoriteStations.map((station) => (
          <StationCard
            key={station.id}
            station={station}
            isSelected={selectedStation?.id === station.id}
            isFavorite={true}
            onSelect={() => onSelectStation(station)}
            onToggleFavorite={onToggleFavorite}
            onOpenReportModal={onOpenReportModal}
            onGetDirections={onGetDirections}
          />
        ))}
      </div>
    </div>
  );
};
