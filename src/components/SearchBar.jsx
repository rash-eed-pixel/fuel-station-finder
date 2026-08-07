import React, { useState } from 'react';
import { Search, Navigation, MapPin, X, ChevronDown, Compass } from 'lucide-react';
import { PRESET_LOCATIONS } from '../utils/geolocation.js';
import { FUEL_TYPE_OPTIONS } from '../types.js';

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
  maxDistanceKm,
  setMaxDistanceKm,
  selectedFuelTypes,
  toggleFuelType,
  onLocateMe,
  onSelectPresetLocation,
  isLocating,
  totalStationsFound,
}) => {
  const [presetsOpen, setPresetsOpen] = useState(false);
  const [tempSearchInput, setTempSearchInput] = useState(searchQuery);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setSearchQuery(tempSearchInput);
  };

  const handleClear = () => {
    setTempSearchInput('');
    setSearchQuery('');
  };

  // Quick-access pills: one flagship hub per Nigerian geopolitical zone,
  // derived from PRESET_LOCATIONS (single source of truth) rather than a
  // separate hardcoded list, so this can never drift out of sync.
  const ZONE_QUICK_PICKS = {
    'North Central': { city: 'Abuja (FCT CBD)', shortLabel: 'Abuja' },
    'North East': { city: 'Maiduguri', shortLabel: 'Maiduguri' },
    'North West': { city: 'Kano (Kano City)', shortLabel: 'Kano' },
    'South East': { city: 'Enugu (Ogui Rd)', shortLabel: 'Enugu' },
    'South South': { city: 'Port Harcourt', shortLabel: 'Port Harcourt' },
    'South West': { city: 'Lagos (Ikeja & VI)', shortLabel: 'Lagos' },
  };
  const quickZones = [
    { name: 'All Nigeria', state: '', coords: null },
    ...Object.entries(ZONE_QUICK_PICKS).map(([zone, pick]) => {
      const preset = PRESET_LOCATIONS.find((p) => p.name === pick.city && p.zone === zone);
      return { name: `${pick.shortLabel} (${zone})`, state: preset.state.replace(' State', ''), coords: preset.coords };
    }),
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-2xl text-white space-y-4">
      {/* Quick State/Zone Selector Pills across Nigeria */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
        <span className="text-slate-400 font-semibold shrink-0 text-[11px] uppercase tracking-wider mr-1">
          🇳🇬 Find in Region:
        </span>
        {quickZones.map((zone) => {
          const isSelected = zone.state === '' ? searchQuery === '' : searchQuery.toLowerCase().includes(zone.state.toLowerCase());
          return (
            <button
              key={zone.name}
              onClick={() => {
                if (zone.coords) {
                  onSelectPresetLocation(zone.coords);
                }
                setTempSearchInput(zone.state);
                setSearchQuery(zone.state);
              }}
              className={`shrink-0 px-3 py-1.5 rounded-xl font-medium transition-all text-xs flex items-center gap-1 border ${
                isSelected
                  ? 'bg-fuel-500 text-slate-950 border-fuel-400 font-bold shadow'
                  : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-750 hover:text-white'
              }`}
            >
              <span>{zone.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Search Bar Form */}
      <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Main Search Input with Functional Search Button */}
        <div className="md:col-span-6 relative flex items-center">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-fuel-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={tempSearchInput}
            onChange={(e) => {
              setTempSearchInput(e.target.value);
              setSearchQuery(e.target.value);
            }}
            placeholder="Find fuel stations across Nigeria (e.g. Lagos, NNPC Abuja, Bovas Ibadan, Kano)..."
            className="w-full pl-10 pr-24 py-3 bg-slate-800 border border-slate-700/90 rounded-2xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuel-500/50 focus:border-fuel-500 transition-all shadow-inner"
          />
          <div className="absolute inset-y-0 right-1 flex items-center gap-1 pr-1">
            {tempSearchInput && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700"
                title="Clear Search"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-fuel-500 hover:bg-fuel-400 text-slate-950 font-bold px-3 py-1.5 rounded-xl text-xs shadow transition-all"
              title="Click to search stations"
            >
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* Presets City Selector */}
        <div className="md:col-span-3 relative">
          <button
            type="button"
            onClick={() => setPresetsOpen(!presetsOpen)}
            className="w-full flex items-center justify-between px-3.5 py-3 bg-slate-800 border border-slate-700/90 rounded-2xl text-xs font-medium text-slate-200 hover:bg-slate-750 transition-colors shadow-sm"
          >
            <div className="flex items-center gap-2 truncate">
              <Compass className="w-4 h-4 text-fuel-400 shrink-0" />
              <span className="truncate font-semibold">All 36 States + FCT</span>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${presetsOpen ? 'rotate-180' : ''}`} />
          </button>

          {presetsOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden py-2 max-h-80 overflow-y-auto">
              {Object.entries(
                PRESET_LOCATIONS.reduce((groups, preset) => {
                  (groups[preset.zone] = groups[preset.zone] || []).push(preset);
                  return groups;
                }, {})
              ).map(([zone, presets]) => (
                <div key={zone}>
                  <div className="px-3.5 py-1.5 text-[10px] font-extrabold text-fuel-400 uppercase tracking-wider bg-slate-850 sticky top-0">
                    {zone} — {presets.length} state{presets.length === 1 ? '' : 's'}
                  </div>
                  {presets.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => {
                        onSelectPresetLocation(preset.coords);
                        setTempSearchInput(preset.state);
                        setSearchQuery(preset.state);
                        setPresetsOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2.5 text-xs text-slate-200 hover:bg-slate-700 hover:text-fuel-400 transition-colors flex items-center justify-between border-b border-slate-700/40 last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-medium">{preset.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full">
                        {preset.state}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* GPS Locate Me Button */}
        <div className="md:col-span-3 flex items-center gap-2">
          <button
            type="button"
            onClick={onLocateMe}
            disabled={isLocating}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-fuel-500 to-amber-500 hover:from-fuel-600 hover:to-amber-600 text-slate-950 font-extrabold rounded-2xl text-xs shadow-md transition-all disabled:opacity-50"
          >
            <Navigation className={`w-4 h-4 ${isLocating ? 'animate-spin' : ''}`} />
            <span>{isLocating ? 'Detecting GPS...' : 'Use My GPS Location'}</span>
          </button>
        </div>
      </form>

      {/* Fuel Type Chips & Distance Radius Filter */}
      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        {/* Fuel Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-slate-400 font-medium mr-1">Fuel Stock:</span>
          {FUEL_TYPE_OPTIONS.map((fuel) => {
            const isSelected = selectedFuelTypes.includes(fuel.type);
            return (
              <button
                key={fuel.type}
                type="button"
                onClick={() => toggleFuelType(fuel.type)}
                aria-pressed={isSelected}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all border ${
                  isSelected
                    ? 'bg-fuel-500/20 border-fuel-500/60 text-fuel-400 font-bold shadow-sm'
                    : 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:text-slate-100 hover:bg-slate-800'
                }`}
              >
                <span>{fuel.badge}</span>
                <span>{fuel.label}</span>
              </button>
            );
          })}
        </div>

        {/* Distance Range Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300">
            <span className="text-slate-400 font-medium">Search Radius:</span>
            <select
              value={maxDistanceKm}
              onChange={(e) => setMaxDistanceKm(Number(e.target.value))}
              className="bg-transparent text-fuel-400 font-bold focus:outline-none cursor-pointer text-xs"
            >
              <option value={10} className="bg-slate-800 text-slate-200">10 km</option>
              <option value={25} className="bg-slate-800 text-slate-200">25 km</option>
              <option value={50} className="bg-slate-800 text-slate-200">50 km</option>
              <option value={150} className="bg-slate-800 text-slate-200">150 km</option>
              <option value={1000} className="bg-slate-800 text-slate-200">Nationwide (All Nigeria)</option>
            </select>
          </div>

          <div className="text-xs font-semibold text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
            <span className="text-fuel-400 font-extrabold mr-1">{totalStationsFound}</span>
            <span>station{totalStationsFound === 1 ? '' : 's'} available</span>
          </div>
        </div>
      </div>
    </div>
  );
};
