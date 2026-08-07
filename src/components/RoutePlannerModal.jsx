import React, { useState } from 'react';
import { X, Calculator, Navigation, Sparkles, Leaf } from 'lucide-react';
import { calculateTripCost } from '../utils/fuelCalculator.js';
import { FUEL_TYPE_OPTIONS } from '../types.js';

export const RoutePlannerModal = ({
  stations,
  onClose,
  onSelectStationForNav,
}) => {
  const [distanceKm, setDistanceKm] = useState(120);
  const [mileageKmpl, setMileageKmpl] = useState(12);
  const [selectedFuelType, setSelectedFuelType] = useState('petrol');
  const [customPrice, setCustomPrice] = useState(1250);

  const tripResult = calculateTripCost(distanceKm, mileageKmpl, customPrice, selectedFuelType);

  // Find cheapest station for selected fuel type
  const cheapestStation = [...stations]
    .filter((st) => st.fuelPrices[selectedFuelType]?.status === 'available')
    .sort(
      (a, b) =>
        (a.fuelPrices[selectedFuelType]?.price || 9999) -
        (b.fuelPrices[selectedFuelType]?.price || 9999)
    )[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl text-white relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Close trip calculator"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">Trip Fuel Cost Calculator (Nigeria)</h3>
            <p className="text-xs text-slate-400">Estimate your trip fuel expenditure & total Liters needed</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Inputs Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Trip Distance (km)
              </label>
              <input
                type="number"
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Vehicle Mileage (km / L)
              </label>
              <input
                type="number"
                value={mileageKmpl}
                onChange={(e) => setMileageKmpl(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Fuel / Energy Type
              </label>
              <select
                value={selectedFuelType}
                onChange={(e) => setSelectedFuelType(e.target.value)}
                className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white font-medium"
              >
                {FUEL_TYPE_OPTIONS.map((fuel) => (
                  <option key={fuel.type} value={fuel.type}>
                    {fuel.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Rate (₦ / Unit)
              </label>
              <input
                type="number"
                value={customPrice}
                onChange={(e) => setCustomPrice(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white font-bold"
              />
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-gradient-to-br from-slate-850 to-slate-800 border border-slate-700/80 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Estimated Total Trip Cost</span>
              <span className="font-display text-2xl font-extrabold text-fuel-400">
                ₦{tripResult.totalCost.toLocaleString('en-NG')}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-slate-700/60 pt-3 text-center">
              <div>
                <div className="text-[11px] text-slate-400">Fuel Required</div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {tripResult.totalUnitsNeeded} {selectedFuelType === 'ev' ? 'kWh' : selectedFuelType === 'cng' ? 'kg' : 'L'}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-400">Efficiency</div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {tripResult.mileageKmpl} km/L
                </div>
              </div>

              <div>
                <div className="text-[11px] font-medium text-emerald-400 flex items-center justify-center gap-1">
                  <Leaf className="w-3 h-3" />
                  <span>CO2 Emissions</span>
                </div>
                <div className="text-sm font-bold text-emerald-300 mt-0.5">
                  {tripResult.co2EmissionsKg} kg
                </div>
              </div>
            </div>
          </div>

          {/* Cheapest Station Recommendation */}
          {cheapestStation && (
            <div className="bg-fuel-500/10 border border-fuel-500/30 rounded-2xl p-3.5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-fuel-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cheapest Station: {cheapestStation.name}</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  ₦{cheapestStation.fuelPrices[selectedFuelType]?.price.toLocaleString()} / L • {cheapestStation.address}
                </div>
              </div>
              <button
                onClick={() => {
                  onSelectStationForNav(cheapestStation);
                  onClose();
                }}
                className="px-3 py-1.5 bg-fuel-500 hover:bg-fuel-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1 shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
