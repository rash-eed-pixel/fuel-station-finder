import React, { useState } from 'react';
import { MapPin, Heart, Activity, Calculator, User, Menu, X, Navigation } from 'lucide-react';
import { BrandMark } from './BrandMark.jsx';

export const Navbar = ({
  activeTab,
  setActiveTab,
  userCoords,
  onLocateMe,
  favoritesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'finder', label: 'Station Finder', icon: MapPin },
    { id: 'favorites', label: 'Saved Stations', icon: Heart, badge: favoritesCount },
    { id: 'feed', label: 'Community Feed', icon: Activity },
    { id: 'planner', label: 'Fuel Calculator', icon: Calculator },
    { id: 'profile', label: 'My Account', icon: User },
  ];

  return (
    <header className="sticky top-0 z-40 bg-asphalt-950/95 backdrop-blur-md border-b border-white/5 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => setActiveTab('finder')}>
            <BrandMark className="w-9 h-9 shrink-0 drop-shadow-[0_0_10px_rgba(244,144,30,0.35)]" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg tracking-tight text-white">
                  NaijaFuel
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Stock Feed
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Nigeria Real-Time Station & Pump Price Tracker</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-fuel-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span
                      className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                        isActive ? 'bg-slate-950 text-fuel-400' : 'bg-fuel-500 text-slate-950'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Location Bar Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onLocateMe}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 transition-colors"
              title="Detect your current location in Nigeria"
            >
              <Navigation className="w-3.5 h-3.5 text-fuel-400" />
              <span className="truncate max-w-[150px]">
                {userCoords?.addressName || `${userCoords?.lat?.toFixed(2)}, ${userCoords?.lng?.toFixed(2)}`}
              </span>
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onLocateMe}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-fuel-400"
              title="Locate Me"
              aria-label="Use my GPS location"
            >
              <Navigation className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-fuel-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs bg-slate-950 text-fuel-400 font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
