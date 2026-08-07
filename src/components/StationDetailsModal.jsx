import React from 'react';
import { X, Star, MapPin, Phone, Clock, Navigation, ShieldCheck, Zap, Heart } from 'lucide-react';
import { formatRelativeTime, getFuelTypeName, getStatusBadgeStyle } from '../utils/geolocation.js';
import { AMENITY_OPTIONS } from '../types.js';

export const StationDetailsModal = ({
  station,
  reports,
  isFavorite,
  onClose,
  onToggleFavorite,
  onOpenReportModal,
  onGetDirections,
}) => {
  const stationReports = reports.filter((r) => r.stationId === station.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full my-8 shadow-2xl text-white relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-56 w-full bg-slate-800">
          <img
            src={station.photos[0] || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'}
            alt={station.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close & Action Buttons on Top Bar */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(station.id)}
              aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
              aria-pressed={isFavorite}
              className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
                isFavorite
                  ? 'bg-rose-500/80 border-rose-400 text-white'
                  : 'bg-slate-900/60 border-slate-700 text-slate-200 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            </button>
            <button
              onClick={onClose}
              aria-label="Close station details"
              className="p-2.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-fuel-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
                {station.brand}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-slate-900/80 px-2 py-0.5 rounded-full backdrop-blur-md">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{station.rating} ({station.reviewCount} reviews)</span>
              </div>
            </div>
            <h2 className="font-display text-2xl font-extrabold text-white">{station.name}</h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2.5 bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60">
              <MapPin className="w-4 h-4 text-fuel-400 shrink-0" />
              <div className="text-xs">
                <div className="text-slate-400">Address</div>
                <div className="font-semibold text-slate-200 truncate">{station.address}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <div className="text-xs">
                <div className="text-slate-400">Operating Hours</div>
                <div className="font-semibold text-slate-200">{station.openingHours}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-800/80 p-3 rounded-2xl border border-slate-700/60">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <div className="text-slate-400">Contact</div>
                <div className="font-semibold text-slate-200">{station.phone}</div>
              </div>
            </div>
          </div>

          {/* Live Fuel Prices & Stock Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-fuel-400" />
                <span>Live Fuel Availability & Pump Rates (Nigeria)</span>
              </h3>
              <button
                onClick={() => onOpenReportModal(station)}
                className="text-xs text-fuel-400 font-bold hover:underline flex items-center gap-1"
              >
                <span>+ Report Stock Update</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(station.fuelPrices).map(([typeKey, priceObj]) => {
                if (!priceObj) return null;
                const statusStyle = getStatusBadgeStyle(priceObj.status);
                return (
                  <div
                    key={typeKey}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80"
                  >
                    <div>
                      <div className="text-xs font-bold text-white capitalize">
                        {getFuelTypeName(typeKey)}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Updated {formatRelativeTime(priceObj.lastUpdated)}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-extrabold text-fuel-400">
                        ₦{priceObj.price.toLocaleString()} <span className="text-[10px] text-slate-400">{priceObj.unit}</span>
                      </div>
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${statusStyle.bg}`}>
                        {statusStyle.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Amenities Grid */}
          <div>
            <h3 className="font-bold text-sm text-white mb-2.5">Station Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {station.amenities.map((a) => {
                const info = AMENITY_OPTIONS.find((opt) => opt.key === a) || { label: a, icon: '✨' };
                return (
                  <div
                    key={a}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-300"
                  >
                    <span>{info.icon}</span>
                    <span>{info.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Community Feed for this station */}
          {stationReports.length > 0 && (
            <div>
              <h3 className="font-bold text-sm text-white mb-2.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Recent Crowd Reports</span>
              </h3>
              <div className="space-y-2">
                {stationReports.map((rep) => (
                  <div key={rep.id} className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-200">{rep.userName}</span>
                      <span className="text-[11px] text-slate-400">{formatRelativeTime(rep.timestamp)}</span>
                    </div>
                    <div className="text-slate-300">
                      Reported <span className="font-semibold text-fuel-400">{getFuelTypeName(rep.fuelType)}</span> as{' '}
                      <span className={rep.isAvailable ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {rep.isAvailable ? 'In Stock' : 'Out of Stock'}
                      </span>
                      {rep.reportedPrice && ` at ₦${rep.reportedPrice.toLocaleString()}`}
                      {rep.notes && ` — "${rep.notes}"`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-850 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenReportModal(station)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 font-bold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Update Fuel Status</span>
          </button>

          <button
            onClick={() => onGetDirections(station)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-fuel-500 hover:bg-fuel-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Navigation className="w-4 h-4 text-slate-950" />
            <span>Start Navigation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
