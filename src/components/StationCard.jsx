import React from 'react';
import { Star, MapPin, Clock, Heart, Navigation, ShieldCheck, Zap } from 'lucide-react';
import { formatDistance, formatRelativeTime, getStatusBadgeStyle, getFuelTypeName } from '../utils/geolocation.js';

export const StationCard = ({
  station,
  isSelected,
  isFavorite,
  onSelect,
  onToggleFavorite,
  onOpenReportModal,
  onGetDirections,
}) => {
  const primaryPrices = Object.values(station.fuelPrices).filter(Boolean);

  return (
    <div
      onClick={onSelect}
      className={`group relative bg-slate-900 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden p-4 sm:p-5 shadow-lg ${
        isSelected
          ? 'border-fuel-500 ring-2 ring-fuel-500/30 bg-slate-850'
          : 'border-slate-800 hover:border-slate-700 hover:bg-slate-850/80'
      }`}
    >
      {/* Top Bar: Brand, Rating & Favorite */}
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-750 border border-slate-700 flex items-center justify-center font-bold text-fuel-400 text-sm shadow-inner shrink-0">
            {station.brand.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-white group-hover:text-fuel-400 transition-colors leading-snug">
              {station.name}
            </h4>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-fuel-400" />
                {station.address}, {station.city}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Rating */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-bold text-xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{station.rating}</span>
            <span className="text-[10px] text-slate-400 font-normal">({station.reviewCount})</span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(station.id);
            }}
            className={`p-2 rounded-xl border transition-all ${
              isFavorite
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-400'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            aria-pressed={isFavorite}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Distance & Hours info */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3.5 pt-1">
        {station.distanceKm !== undefined && (
          <span className="font-semibold text-fuel-400 bg-fuel-500/10 px-2 py-0.5 rounded-md border border-fuel-500/20">
            {formatDistance(station.distanceKm)} away
          </span>
        )}
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-slate-400" />
          <span className={station.isOpenNow ? 'text-emerald-400 font-medium' : 'text-slate-400'}>
            {station.openingHours}
          </span>
        </span>
        {station.lastReportedTimestamp && (
          <span className="flex items-center gap-1 text-[11px] text-slate-400 ml-auto">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            <span>Updated {formatRelativeTime(station.lastReportedTimestamp)}</span>
          </span>
        )}
      </div>

      {/* Fuel Prices & Stock Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {primaryPrices.map((fp) => {
          if (!fp) return null;
          const statusStyle = getStatusBadgeStyle(fp.status);
          return (
            <div
              key={fp.type}
              className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1">
                <span className="truncate pr-1">
                  {getFuelTypeName(fp.type)}
                </span>
                <span className={`px-1.5 py-0.2 rounded text-[9px] border font-bold shrink-0 ${statusStyle.bg}`}>
                  {statusStyle.label}
                </span>
              </div>
              <div className="text-sm font-extrabold text-white flex items-baseline gap-1">
                <span>₦{fp.price.toLocaleString()}</span>
                <span className="text-[10px] text-slate-400 font-normal">{fp.unit}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onGetDirections(station);
          }}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-fuel-500 hover:bg-fuel-400 text-slate-950 font-extrabold text-xs transition-colors shadow-sm"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenReportModal(station);
          }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-medium transition-colors"
          title="Report Fuel Availability"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Report Stock</span>
        </button>
      </div>
    </div>
  );
};
