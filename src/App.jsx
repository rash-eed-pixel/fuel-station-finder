import React, { useState, useMemo } from 'react';
import { INITIAL_STATIONS, INITIAL_REPORTS } from './data/mockStations.js';
import { calculateDistanceKm } from './utils/geolocation.js';
import { Navbar } from './components/Navbar.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { FilterPanel } from './components/FilterPanel.jsx';
import { StationCard } from './components/StationCard.jsx';
import { MapContainer } from './components/MapContainer.jsx';
import { StationDetailsModal } from './components/StationDetailsModal.jsx';
import { ReportFuelModal } from './components/ReportFuelModal.jsx';
import { RoutePlannerModal } from './components/RoutePlannerModal.jsx';
import { CommunityFeed } from './components/CommunityFeed.jsx';
import { FavoritesView } from './components/FavoritesView.jsx';
import { ProfileView } from './components/ProfileView.jsx';
import { Footer } from './components/Footer.jsx';
import { ToastContainer } from './components/Toast.jsx';
import { SlidersHorizontal, Map, List, AlertCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('finder');
  
  // Geolocation & Coordinates State (Default: Abuja FCT, Nigeria)
  const [userCoords, setUserCoords] = useState({
    lat: 9.0765,
    lng: 7.3986,
    addressName: 'Abuja, FCT (Nigeria)',
  });
  const [isLocating, setIsLocating] = useState(false);

  // App Datasets
  const [stations, setStations] = useState(INITIAL_STATIONS);
  const [reports, setReports] = useState(INITIAL_REPORTS);
  const [favoriteIds, setFavoriteIds] = useState(['st-ng-001', 'st-ng-004']);

  // Modals & Selection
  const [selectedStation, setSelectedStation] = useState(null);
  const [detailsStation, setDetailsStation] = useState(null);
  const [reportStation, setReportStation] = useState(null);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState('split');

  // Toasts
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // User Profile (Consumer Driver Profile)
  const [userProfile, setUserProfile] = useState({
    id: 'usr-driver-ng',
    name: 'Ibrahim Musa',
    email: 'ibrahim.musa@driver.ng',
    vehicleName: 'Toyota Corolla 1.8L',
    preferredFuel: 'petrol',
    tankCapacityLiters: 50,
    averageMileageKmpl: 13.5,
    favoriteStationIds: ['st-ng-001', 'st-ng-004'],
    reportsSubmitted: 14,
  });

  // Filters State
  const [filters, setFilters] = useState({
    fuelTypes: [],
    onlyAvailable: false,
    onlyOpenNow: false,
    minRating: 0,
    maxDistanceKm: 1000, // Nationwide default search
    amenities: [],
    sortBy: 'distance',
    searchQuery: '',
  });

  // Geolocation Handler
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      addToast('Geolocation is not supported by your browser.', 'error');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          addressName: 'Current GPS Location',
        };
        setUserCoords(coords);
        setIsLocating(false);
        addToast('GPS location updated successfully!', 'success');
      },
      () => {
        setIsLocating(false);
        addToast('Could not fetch GPS location. Reverting to preset.', 'error');
      },
      { timeout: 8000 }
    );
  };

  // Toggle Fuel Type filter chip
  const toggleFuelTypeFilter = (type) => {
    setFilters((prev) => {
      const exists = prev.fuelTypes.includes(type);
      const updated = exists
        ? prev.fuelTypes.filter((t) => t !== type)
        : [...prev.fuelTypes, type];
      return { ...prev, fuelTypes: updated };
    });
  };

  // Toggle Favorites
  const toggleFavorite = (stationId) => {
    setFavoriteIds((prev) => {
      const isFav = prev.includes(stationId);
      if (isFav) {
        addToast('Removed from favorites', 'info');
        return prev.filter((id) => id !== stationId);
      } else {
        addToast('Saved to favorites!', 'success');
        return [...prev, stationId];
      }
    });
  };

  // Handle Get Directions
  const handleGetDirections = (station) => {
    setSelectedStation(station);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
    addToast(`Launching turn-by-turn navigation for ${station.name}`, 'info');
  };

  // Handle New Report Submission
  const handleReportSubmit = (reportData) => {
    // Update station state
    setStations((prev) =>
      prev.map((st) => {
        if (st.id === reportData.stationId) {
          const updatedPrices = { ...st.fuelPrices };
          if (updatedPrices[reportData.fuelType]) {
            updatedPrices[reportData.fuelType] = {
              ...updatedPrices[reportData.fuelType],
              status: reportData.status,
              price: reportData.price || updatedPrices[reportData.fuelType].price,
              lastUpdated: new Date().toISOString(),
            };
          } else {
            updatedPrices[reportData.fuelType] = {
              type: reportData.fuelType,
              price: reportData.price || 1250,
              unit: reportData.fuelType === 'cng' ? '₦/kg' : reportData.fuelType === 'ev' ? '₦/kWh' : '₦/L',
              status: reportData.status,
              lastUpdated: new Date().toISOString(),
            };
          }
          return {
            ...st,
            fuelPrices: updatedPrices,
            reportsCount: st.reportsCount + 1,
            lastReportedTimestamp: new Date().toISOString(),
          };
        }
        return st;
      })
    );

    // Append to live feed
    const targetStation = stations.find((s) => s.id === reportData.stationId);
    const newReport = {
      id: `rep-${Date.now()}`,
      stationId: reportData.stationId,
      stationName: targetStation?.name || 'Fuel Station',
      userName: `${userProfile.name} (Verified Driver)`,
      fuelType: reportData.fuelType,
      isAvailable: reportData.status === 'available',
      reportedPrice: reportData.price,
      notes: reportData.notes,
      timestamp: new Date().toISOString(),
    };

    setReports((prev) => [newReport, ...prev]);
    setUserProfile((prev) => ({ ...prev, reportsSubmitted: prev.reportsSubmitted + 1 }));
    setReportStation(null);
    addToast('Thank you! Your fuel stock report has been published.', 'success');
  };

  // Recalculate station distances relative to active userCoords & apply filters
  const filteredAndSortedStations = useMemo(() => {
    return stations
      .map((st) => {
        const dist = calculateDistanceKm(userCoords.lat, userCoords.lng, st.lat, st.lng);
        return { ...st, distanceKm: dist };
      })
      .filter((st) => {
        // Search query
        if (filters.searchQuery) {
          const q = filters.searchQuery.toLowerCase();
          const matchesName = st.name.toLowerCase().includes(q);
          const matchesBrand = st.brand.toLowerCase().includes(q);
          const matchesAddress = st.address.toLowerCase().includes(q);
          const matchesCity = st.city.toLowerCase().includes(q);
          const matchesState = st.state.toLowerCase().includes(q);
          if (!matchesName && !matchesBrand && !matchesAddress && !matchesCity && !matchesState) {
            return false;
          }
        }

        // Distance filter
        if (st.distanceKm > filters.maxDistanceKm) return false;

        // Rating filter
        if (st.rating < filters.minRating) return false;

        // Only open now
        if (filters.onlyOpenNow && !st.isOpenNow) return false;

        // Fuel types filter
        if (filters.fuelTypes.length > 0) {
          const hasAnySelectedFuel = filters.fuelTypes.some((type) => Boolean(st.fuelPrices[type]));
          if (!hasAnySelectedFuel) return false;
        }

        // Only available
        if (filters.onlyAvailable) {
          const hasAvailableFuel = Object.values(st.fuelPrices).some(
            (fp) => Boolean(fp && fp.status === 'available')
          );
          if (!hasAvailableFuel) return false;
        }

        // Amenities filter
        if (filters.amenities.length > 0) {
          const hasAllAmenities = filters.amenities.every((a) => st.amenities.includes(a));
          if (!hasAllAmenities) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'distance') {
          return (a.distanceKm || 0) - (b.distanceKm || 0);
        }
        if (filters.sortBy === 'rating') {
          return b.rating - a.rating;
        }
        if (filters.sortBy === 'reports') {
          return b.reportsCount - a.reportsCount;
        }
        if (filters.sortBy === 'price') {
          const priceA = a.fuelPrices.petrol?.price || 9999;
          const priceB = b.fuelPrices.petrol?.price || 9999;
          return priceA - priceB;
        }
        return 0;
      });
  }, [stations, userCoords, filters]);

  const favoriteStationsList = useMemo(() => {
    return stations
      .filter((st) => favoriteIds.includes(st.id))
      .map((st) => ({
        ...st,
        distanceKm: calculateDistanceKm(userCoords.lat, userCoords.lng, st.lat, st.lng),
      }));
  }, [stations, favoriteIds, userCoords]);

  return (
    <div className="min-h-screen bg-asphalt-950 text-slate-100 flex flex-col font-sans selection:bg-fuel-500 selection:text-slate-950">
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userCoords={userCoords}
        onLocateMe={handleLocateMe}
        favoritesCount={favoriteIds.length}
      />

      {/* Main Page Views */}
      <main className="flex-1 pb-16">
        {activeTab === 'finder' && (
          <div>
            {/* Hero Section */}
            <HeroSection
              onOpenPlanner={() => setIsPlannerOpen(true)}
              onOpenFeed={() => setActiveTab('feed')}
            />

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
              {/* Search Bar Widget */}
              <SearchBar
                searchQuery={filters.searchQuery}
                setSearchQuery={(q) => setFilters((prev) => ({ ...prev, searchQuery: q }))}
                maxDistanceKm={filters.maxDistanceKm}
                setMaxDistanceKm={(d) => setFilters((prev) => ({ ...prev, maxDistanceKm: d }))}
                selectedFuelTypes={filters.fuelTypes}
                toggleFuelType={toggleFuelTypeFilter}
                onLocateMe={handleLocateMe}
                onSelectPresetLocation={(coords) => {
                  setUserCoords(coords);
                  addToast(`Location set to ${coords.addressName}`, 'success');
                }}
                isLocating={isLocating}
                totalStationsFound={filteredAndSortedStations.length}
              />

              {/* View Mode Toggle Bar (Mobile / Tablet controls) */}
              <div className="flex items-center justify-between bg-slate-900 p-2 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-orange-400" />
                  <span>Filters</span>
                </button>

                <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl ml-auto">
                  <button
                    onClick={() => setViewMode('split')}
                    className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      viewMode === 'split' ? 'bg-orange-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    <span>Split View</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      viewMode === 'list' ? 'bg-orange-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>List</span>
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      viewMode === 'map' ? 'bg-orange-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    <Map className="w-3.5 h-3.5" />
                    <span>Map</span>
                  </button>
                </div>
              </div>

              {/* Mobile Collapsible Filter Drawer */}
              {showMobileFilters && (
                <div className="lg:hidden">
                  <FilterPanel
                    filters={filters}
                    setFilters={setFilters}
                    onReset={() =>
                      setFilters({
                        fuelTypes: [],
                        onlyAvailable: false,
                        onlyOpenNow: false,
                        minRating: 0,
                        maxDistanceKm: 1000,
                        amenities: [],
                        sortBy: 'distance',
                        searchQuery: '',
                      })
                    }
                  />
                </div>
              )}

              {/* Grid Layout: Left Filters (Desktop), Middle Cards List, Right Interactive Map */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Desktop Left Sidebar: Filters */}
                <div className="hidden lg:block lg:col-span-3 sticky top-20">
                  <FilterPanel
                    filters={filters}
                    setFilters={setFilters}
                    onReset={() =>
                      setFilters({
                        fuelTypes: [],
                        onlyAvailable: false,
                        onlyOpenNow: false,
                        minRating: 0,
                        maxDistanceKm: 1000,
                        amenities: [],
                        sortBy: 'distance',
                        searchQuery: '',
                      })
                    }
                  />
                </div>

                {/* Stations List Column */}
                {(viewMode === 'split' || viewMode === 'list') && (
                  <div
                    className={`${
                      viewMode === 'list'
                        ? 'lg:col-span-12'
                        : viewMode === 'split'
                        ? 'lg:col-span-5'
                        : 'hidden'
                    } space-y-4 max-h-[800px] overflow-y-auto pr-1`}
                  >
                    {filteredAndSortedStations.length === 0 ? (
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
                        <AlertCircle className="w-8 h-8 text-orange-400 mx-auto" />
                        <h4 className="font-bold text-white text-base">No Fuel Stations Found</h4>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto">
                          Try expanding your search radius, resetting filters, or selecting another Nigerian city preset.
                        </p>
                      </div>
                    ) : (
                      filteredAndSortedStations.map((station) => (
                        <StationCard
                          key={station.id}
                          station={station}
                          isSelected={selectedStation?.id === station.id}
                          isFavorite={favoriteIds.includes(station.id)}
                          onSelect={() => {
                            setSelectedStation(station);
                            setDetailsStation(station);
                          }}
                          onToggleFavorite={toggleFavorite}
                          onOpenReportModal={(st) => setReportStation(st)}
                          onGetDirections={handleGetDirections}
                        />
                      ))
                    )}
                  </div>
                )}

                {/* Interactive Map Column */}
                {(viewMode === 'split' || viewMode === 'map') && (
                  <div
                    className={`${
                      viewMode === 'map'
                        ? 'lg:col-span-12'
                        : viewMode === 'split'
                        ? 'lg:col-span-4'
                        : 'hidden'
                    } h-[600px] lg:h-[800px] sticky top-20`}
                  >
                    <MapContainer
                      stations={filteredAndSortedStations}
                      selectedStation={selectedStation}
                      userCoords={userCoords}
                      onSelectStation={(st) => {
                        setSelectedStation(st);
                        setDetailsStation(st);
                      }}
                      onGetDirections={handleGetDirections}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Favorites View */}
        {activeTab === 'favorites' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <FavoritesView
              favoriteStations={favoriteStationsList}
              selectedStation={selectedStation}
              onSelectStation={(st) => {
                setSelectedStation(st);
                setDetailsStation(st);
              }}
              onToggleFavorite={toggleFavorite}
              onOpenReportModal={(st) => setReportStation(st)}
              onGetDirections={handleGetDirections}
            />
          </div>
        )}

        {/* Live Community Feed */}
        {activeTab === 'feed' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <CommunityFeed
              reports={reports}
              onSelectStation={(stId) => {
                const target = stations.find((s) => s.id === stId);
                if (target) {
                  setSelectedStation(target);
                  setDetailsStation(target);
                  setActiveTab('finder');
                }
              }}
            />
          </div>
        )}

        {/* Trip Fuel Calculator Tab */}
        {activeTab === 'planner' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <RoutePlannerModal
              stations={stations}
              onClose={() => setActiveTab('finder')}
              onSelectStationForNav={(st) => {
                handleGetDirections(st);
              }}
            />
          </div>
        )}

        {/* User Profile View */}
        {activeTab === 'profile' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <ProfileView
              userProfile={userProfile}
              onUpdateProfile={(updated) => setUserProfile(updated)}
              onShowToast={addToast}
            />
          </div>
        )}
      </main>

      {/* Station Details Drawer Modal */}
      {detailsStation && (
        <StationDetailsModal
          station={detailsStation}
          reports={reports}
          isFavorite={favoriteIds.includes(detailsStation.id)}
          onClose={() => setDetailsStation(null)}
          onToggleFavorite={toggleFavorite}
          onOpenReportModal={(st) => {
            setDetailsStation(null);
            setReportStation(st);
          }}
          onGetDirections={handleGetDirections}
        />
      )}

      {/* Report Fuel Stock Modal */}
      {reportStation && (
        <ReportFuelModal
          station={reportStation}
          onClose={() => setReportStation(null)}
          onSubmitReport={handleReportSubmit}
        />
      )}

      {/* Trip Planner Modal (if triggered via hero button) */}
      {isPlannerOpen && (
        <RoutePlannerModal
          stations={stations}
          onClose={() => setIsPlannerOpen(false)}
          onSelectStationForNav={(st) => {
            handleGetDirections(st);
          }}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
