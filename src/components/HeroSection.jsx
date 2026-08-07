import React from 'react';
import { Fuel, ShieldCheck, Zap, Users, ArrowRight, MapPin, Search } from 'lucide-react';

export const HeroSection = ({ onOpenPlanner, onOpenFeed }) => {
  return (
    <div className="relative bg-asphalt-900 border-b border-white/5 py-8 sm:py-10 overflow-hidden brand-noise">
      <div className="absolute inset-0 brand-grid-texture opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Main Copy */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuel-500/10 border border-fuel-500/20 text-fuel-400 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 text-fuel-400" />
                <span>Live Stock &amp; Price Updates</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Driver-Verified Pump Rates</span>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Never queue at the wrong station again.
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              NaijaFuel tracks PMS, AGO, CNG, kerosene and EV charge availability station-by-station,
              reported by drivers on the ground — from Ilorin to Lagos, Abuja to Maiduguri, across
              all 36 states and the FCT.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenPlanner}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-fuel-500 hover:bg-fuel-400 text-slate-950 font-bold text-xs shadow-md shadow-fuel-500/20 transition-all"
              >
                <Fuel className="w-4 h-4 text-slate-950" />
                <span>Trip Fuel Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenFeed}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-semibold text-xs transition-all"
              >
                <Users className="w-4 h-4 text-fuel-400" />
                <span>Live Community Reports</span>
              </button>
            </div>
          </div>

          {/* Right Metrics Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="bg-asphalt-950/80 border border-slate-800 border-l-2 border-l-emerald-500 p-4 rounded-2xl">
              <div className="p-2 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xl font-display font-extrabold text-white">Nationwide</div>
              <div className="text-xs text-slate-400">All 36 States & FCT</div>
            </div>

            <div className="bg-asphalt-950/80 border border-slate-800 border-l-2 border-l-fuel-500 p-4 rounded-2xl">
              <div className="p-2 w-fit rounded-lg bg-fuel-500/10 text-fuel-400 mb-2">
                <Fuel className="w-5 h-5" />
              </div>
              <div className="text-xl font-display font-extrabold text-white">PMS, AGO, CNG</div>
              <div className="text-xs text-slate-400">Multi-Fuel Support</div>
            </div>

            <div className="bg-asphalt-950/80 border border-slate-800 border-l-2 border-l-blue-500 p-4 rounded-2xl">
              <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xl font-display font-extrabold text-white">Verified</div>
              <div className="text-xs text-slate-400">Crowdsourced Stock</div>
            </div>

            <div className="bg-asphalt-950/80 border border-slate-800 border-l-2 border-l-purple-500 p-4 rounded-2xl">
              <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-400 mb-2">
                <Search className="w-5 h-5" />
              </div>
              <div className="text-xl font-display font-extrabold text-white">Instant GPS</div>
              <div className="text-xs text-slate-400">Directions & Routing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
