import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { BrandMark } from './BrandMark.jsx';

export const Footer = () => {
  return (
    <footer className="bg-asphalt-950 border-t border-white/5 text-slate-400 text-xs py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BrandMark className="w-7 h-7 shrink-0" />
              <span className="font-display font-extrabold text-sm text-white">NaijaFuel Station Finder</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Real-time fuel availability, crowdsourced stock monitoring, and trip cost calculator for drivers across Nigeria, covering all 36 States & FCT Abuja.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-slate-200 text-xs mb-3 uppercase tracking-wider">Features</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Station Locator with GPS</li>
              <li>Real-time PMS, Diesel & CNG Prices</li>
              <li>Turn-by-Turn Maps Navigation</li>
              <li>Trip Fuel Cost Calculator</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-slate-200 text-xs mb-3 uppercase tracking-wider">Major Locations</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Ilorin & Kwara State</li>
              <li>Lagos State (Ikeja, VI, Lekki)</li>
              <li>FCT Abuja (CBD, Wuse, Garki)</li>
              <li>Kano, Oyo, Rivers & All States</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-slate-200 text-xs mb-3 uppercase tracking-wider">Community Watch</h4>
            <p className="text-slate-400 mb-2">
              Live stock status and pump rates updated directly by everyday drivers.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Crowdsourced & Verified</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>© {new Date().getFullYear()} NaijaFuel Finder. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span>Built for drivers across Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
