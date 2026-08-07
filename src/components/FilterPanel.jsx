import React from 'react';
import { Filter, Star, Clock, CheckCircle2, RotateCcw } from 'lucide-react';
import { AMENITY_OPTIONS } from '../types.js';

export const FilterPanel = ({ filters, setFilters, onReset }) => {
  const toggleAmenity = (amenity) => {
    setFilters((prev) => {
      const exists = prev.amenities.includes(amenity);
      const updated = exists
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: updated };
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg text-slate-200 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-fuel-400" />
          <h3 className="font-bold text-sm text-white">Station Filters</h3>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-fuel-400 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Toggles */}
      <div className="space-y-2.5">
        <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors">
          <div className="flex items-center gap-2 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Only Stations with Available Stock</span>
          </div>
          <input
            type="checkbox"
            checked={filters.onlyAvailable}
            onChange={(e) => setFilters((prev) => ({ ...prev, onlyAvailable: e.target.checked }))}
            className="w-4 h-4 rounded border-slate-700 text-fuel-500 focus:ring-fuel-500 bg-slate-900 cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors">
          <div className="flex items-center gap-2 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Open Right Now</span>
          </div>
          <input
            type="checkbox"
            checked={filters.onlyOpenNow}
            onChange={(e) => setFilters((prev) => ({ ...prev, onlyOpenNow: e.target.checked }))}
            className="w-4 h-4 rounded border-slate-700 text-fuel-500 focus:ring-fuel-500 bg-slate-900 cursor-pointer"
          />
        </label>
      </div>

      {/* Sorting */}
      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Sort Results By</label>
        <div className="grid grid-cols-2 gap-1.5 bg-slate-800 p-1 rounded-xl">
          {[
            { key: 'distance', label: 'Nearest' },
            { key: 'price', label: 'Lowest Price' },
            { key: 'rating', label: 'Top Rated' },
            { key: 'reports', label: 'Most Reports' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilters((prev) => ({ ...prev, sortBy: item.key }))}
              className={`py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                filters.sortBy === item.key
                  ? 'bg-fuel-500 text-slate-950 font-bold shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-1.5">
          <span>Minimum Rating</span>
          <span className="text-amber-400 font-bold flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {filters.minRating > 0 ? `${filters.minRating}+ Stars` : 'Any'}
          </span>
        </div>
        <div className="flex items-center justify-between gap-1">
          {[0, 3.5, 4.0, 4.5].map((val) => (
            <button
              key={val}
              onClick={() => setFilters((prev) => ({ ...prev, minRating: val }))}
              className={`flex-1 py-1 rounded-lg text-xs font-medium border transition-all ${
                filters.minRating === val
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750'
              }`}
            >
              {val === 0 ? 'All' : `${val}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Amenities Grid */}
      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Amenities Available</label>
        <div className="grid grid-cols-2 gap-1.5">
          {AMENITY_OPTIONS.map((item) => {
            const isSelected = filters.amenities.includes(item.key);
            return (
              <button
                key={item.key}
                onClick={() => toggleAmenity(item.key)}
                aria-pressed={isSelected}
                className={`flex items-center gap-1.5 p-2 rounded-xl text-xs text-left border transition-all ${
                  isSelected
                    ? 'bg-fuel-500/15 border-fuel-500/50 text-fuel-400 font-medium'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <span>{item.icon}</span>
                <span className="truncate">{item.shortLabel || item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
