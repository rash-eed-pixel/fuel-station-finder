import React, { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, XCircle, Zap, ShieldCheck } from 'lucide-react';
import { getFuelTypeName } from '../utils/geolocation.js';

export const ReportFuelModal = ({
  station,
  onClose,
  onSubmitReport,
}) => {
  const availableFuelTypes = Object.keys(station.fuelPrices);
  const [selectedType, setSelectedType] = useState(availableFuelTypes[0] || 'petrol');
  const [selectedStatus, setSelectedStatus] = useState('available');
  const [priceInput, setPriceInput] = useState(
    station.fuelPrices[selectedType]?.price.toString() || '1250'
  );
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReport({
      stationId: station.id,
      fuelType: selectedType,
      status: selectedStatus,
      price: priceInput ? parseFloat(priceInput) : undefined,
      notes,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl text-white relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close report modal"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-fuel-500/10 border border-fuel-500/20 text-fuel-400 rounded-xl">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">Report Fuel Availability</h3>
            <p className="text-xs text-slate-400">{station.name}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Fuel Type Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2">
              Select Fuel / Energy Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableFuelTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setSelectedType(t);
                    setPriceInput(station.fuelPrices[t]?.price.toString() || '1250');
                  }}
                  aria-pressed={selectedType === t}
                  className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                    selectedType === t
                      ? 'bg-fuel-500/20 border-fuel-500/60 text-fuel-400 font-bold'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750'
                  }`}
                >
                  {getFuelTypeName(t)}
                </button>
              ))}
            </div>
          </div>

          {/* Availability Status Toggles */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2">
              Current Stock Status
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedStatus('available')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold gap-1 transition-all ${
                  selectedStatus === 'available'
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>In Stock</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('low_stock')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold gap-1 transition-all ${
                  selectedStatus === 'low_stock'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Low Queue/Stock</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('out_of_stock')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold gap-1 transition-all ${
                  selectedStatus === 'out_of_stock'
                    ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>Out of Stock</span>
              </button>
            </div>
          </div>

          {/* Current Price per Unit */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">
              Pump Rate in Naira (₦ / {selectedType === 'ev' ? 'kWh' : selectedType === 'cng' ? 'kg' : 'Liter'})
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 font-bold text-sm">₦</span>
              <input
                type="number"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                placeholder="1250"
                className="w-full pl-7 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-fuel-500 font-bold"
              />
            </div>
          </div>

          {/* Optional Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">
              Community Notes (e.g. 10 mins queue, 12 pumps active)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="e.g. Selling PMS at official rate, fast moving line."
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-fuel-500"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-750"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-fuel-500 hover:bg-fuel-400 text-slate-950 shadow-md"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Publish Stock Report</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
