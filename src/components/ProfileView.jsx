import React, { useState } from 'react';
import { Car, Save, MapPin, Gauge } from 'lucide-react';
import { FUEL_TYPE_OPTIONS } from '../types.js';

export const ProfileView = ({
  userProfile,
  onUpdateProfile,
  onShowToast,
}) => {
  const [profile, setProfile] = useState(userProfile);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(profile);
    onShowToast('Driver profile & vehicle preferences updated!', 'success');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Driver Profile Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-fuel-500 flex items-center justify-center font-extrabold text-slate-950 text-2xl shadow-lg">
              {profile.name.substring(0, 1)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl font-extrabold text-white">{profile.name}</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Verified Driver
                </span>
              </div>
              <p className="text-xs text-slate-400">{profile.email}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                <span className="flex items-center gap-1 text-slate-300">
                  <Car className="w-3.5 h-3.5 text-fuel-400" />
                  {profile.vehicleName}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Gauge className="w-3.5 h-3.5 text-blue-400" />
                  {profile.reportsSubmitted} Fuel Reports Published
                </span>
              </div>
            </div>
          </div>

          <div className="px-3.5 py-2 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-fuel-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Nigeria Coverage</div>
              <div className="text-[10px] text-slate-400">36 States & FCT</div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Form */}
      <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-white space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
          <Car className="w-5 h-5 text-fuel-400" />
          <h3 className="font-bold text-base">Vehicle & Consumption Preferences</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Driver Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-fuel-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Vehicle Model / Fleet</label>
            <input
              type="text"
              value={profile.vehicleName}
              onChange={(e) => setProfile({ ...profile, vehicleName: e.target.value })}
              className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-fuel-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Preferred Fuel Type</label>
            <select
              value={profile.preferredFuel}
              onChange={(e) => setProfile({ ...profile, preferredFuel: e.target.value })}
              className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none"
            >
              {FUEL_TYPE_OPTIONS.map((fuel) => (
                <option key={fuel.type} value={fuel.type}>
                  {fuel.formLabel}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Fuel Tank Capacity (Liters)</label>
            <input
              type="number"
              value={profile.tankCapacityLiters}
              onChange={(e) => setProfile({ ...profile, tankCapacityLiters: Number(e.target.value) })}
              className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-fuel-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Average Mileage (km / Liter)</label>
            <input
              type="number"
              value={profile.averageMileageKmpl}
              onChange={(e) => setProfile({ ...profile, averageMileageKmpl: Number(e.target.value) })}
              className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-fuel-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 bg-fuel-500 hover:bg-fuel-400 text-slate-950 font-bold rounded-xl text-xs shadow-md transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Preferences</span>
          </button>
        </div>
      </form>
    </div>
  );
};
