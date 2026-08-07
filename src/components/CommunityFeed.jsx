import React from 'react';
import { Activity, CheckCircle2, AlertTriangle, UserCheck, Clock } from 'lucide-react';
import { formatRelativeTime, getFuelTypeName } from '../utils/geolocation.js';

export const CommunityFeed = ({ reports, onSelectStation }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-white">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-fuel-500/10 border border-fuel-500/20 text-fuel-400 rounded-2xl">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Live Community Fuel Watch (Nigeria)</h2>
            <p className="text-xs text-slate-400">
              Real-time fuel availability & pump rate reports contributed by drivers across Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* Reports Stream */}
      <div className="space-y-3">
        {reports.map((report) => (
          <div
            key={report.id}
            onClick={() => onSelectStation(report.stationId)}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-lg transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-2.5 rounded-xl border mt-0.5 ${
                  report.isAvailable
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                }`}
              >
                {report.isAvailable ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-sm text-white hover:text-fuel-400 transition-colors">
                    {report.stationName}
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                    {getFuelTypeName(report.fuelType)}
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-1">
                  Status:{' '}
                  <span className={report.isAvailable ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {report.isAvailable ? 'IN STOCK' : 'OUT OF STOCK'}
                  </span>
                  {report.reportedPrice && (
                    <span className="text-fuel-400 font-bold ml-2">
                      @ ₦{report.reportedPrice.toLocaleString()} / unit
                    </span>
                  )}
                </p>

                {report.notes && (
                  <p className="text-xs text-slate-400 italic mt-1 bg-slate-800/60 p-2 rounded-xl border border-slate-700/40">
                    "{report.notes}"
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end text-xs text-slate-400 shrink-0">
              <div className="flex items-center gap-1 font-medium text-slate-300">
                <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>{report.userName}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                <Clock className="w-3 h-3" />
                <span>{formatRelativeTime(report.timestamp)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
