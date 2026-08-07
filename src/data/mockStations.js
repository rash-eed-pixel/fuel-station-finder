export const INITIAL_STATIONS = [
  // ==========================================
  // ILORIN (KWARA STATE)
  // ==========================================
  {
    id: 'st-ng-ilr-001',
    name: 'Bovas & Company Station, Challenge Ilorin',
    brand: 'Bovas & Company',
    address: 'Challenge Junction, Offa Road, Ilorin',
    city: 'Ilorin',
    state: 'Kwara State',
    lat: 8.4842,
    lng: 4.5450,
    phone: '+234 803 111 2233',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 480,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1240, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 3 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1350, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 12 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1380, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 25 * 60000).toISOString() }
    },
    reportsCount: 178,
    lastReportedTimestamp: new Date(Date.now() - 3 * 60000).toISOString()
  },
  {
    id: 'st-ng-ilr-002',
    name: 'NNPC Retail Mega Station, Offa Garage Ilorin',
    brand: 'NNPC Retail',
    address: 'Offa Garage Road, Near Michael Imodu Institute, Ilorin',
    city: 'Ilorin',
    state: 'Kwara State',
    lat: 8.4680,
    lng: 4.5580,
    phone: '+234 31 220 400',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 520,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'cng_station', 'cafe'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1200, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 5 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1340, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 15 * 60000).toISOString() },
      cng: { type: 'cng', price: 230, unit: '₦/kg', status: 'available', lastUpdated: new Date(Date.now() - 2 * 60000).toISOString() }
    },
    reportsCount: 210,
    lastReportedTimestamp: new Date(Date.now() - 2 * 60000).toISOString()
  },
  {
    id: 'st-ng-ilr-003',
    name: 'TotalEnergies Station, Taiwo Road Ilorin',
    brand: 'TotalEnergies',
    address: 'Ibrahim Taiwo Road, Ilorin',
    city: 'Ilorin',
    state: 'Kwara State',
    lat: 8.4910,
    lng: 4.5390,
    phone: '+234 802 444 5566',
    openingHours: '06:00 AM - 10:30 PM',
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 310,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'car_wash', 'ev_fast_charger'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1280, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 10 * 60000).toISOString() },
      premium_petrol: { type: 'premium_petrol', price: 1450, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 18 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1380, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 22 * 60000).toISOString() }
    },
    reportsCount: 94,
    lastReportedTimestamp: new Date(Date.now() - 10 * 60000).toISOString()
  },
  {
    id: 'st-ng-ilr-004',
    name: 'Conoil Filling Station, Fate Road GRA Ilorin',
    brand: 'Conoil',
    address: 'Fate Road, Opp. Kwara State Secretariat, GRA, Ilorin',
    city: 'Ilorin',
    state: 'Kwara State',
    lat: 8.4975,
    lng: 4.5620,
    phone: '+234 803 555 6677',
    openingHours: '06:00 AM - 09:30 PM',
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 230,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1270, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 15 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1370, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 30 * 60000).toISOString() }
    },
    reportsCount: 65,
    lastReportedTimestamp: new Date(Date.now() - 15 * 60000).toISOString()
  },
  {
    id: 'st-ng-ilr-005',
    name: 'AA Rano Station, Tanke University Road Ilorin',
    brand: 'AA Rano',
    address: 'University Road, Tanke Junction, Ilorin',
    city: 'Ilorin',
    state: 'Kwara State',
    lat: 8.4730,
    lng: 4.5810,
    phone: '+234 805 777 8899',
    openingHours: '05:30 AM - 11:00 PM',
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 410,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'mechanic'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1250, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 8 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1360, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 20 * 60000).toISOString() }
    },
    reportsCount: 132,
    lastReportedTimestamp: new Date(Date.now() - 8 * 60000).toISOString()
  },
  {
    id: 'st-ng-ilr-006',
    name: 'Rainoil Station, Asa Dam Road Ilorin',
    brand: 'Rainoil',
    address: 'Asa Dam Road, Near Kwara State Stadium, Ilorin',
    city: 'Ilorin',
    state: 'Kwara State',
    lat: 8.4610,
    lng: 4.5290,
    phone: '+234 803 888 9900',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 260,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1260, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 14 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1375, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 28 * 60000).toISOString() }
    },
    reportsCount: 81,
    lastReportedTimestamp: new Date(Date.now() - 14 * 60000).toISOString()
  },

  // ==========================================
  // LAGOS STATE
  // ==========================================
  {
    id: 'st-ng-001',
    name: 'TotalEnergies Station, Victoria Island',
    brand: 'TotalEnergies',
    address: 'Adetokunbo Ademola Street, Victoria Island',
    city: 'Lagos',
    state: 'Lagos State',
    lat: 6.4281,
    lng: 3.4219,
    phone: '+234 1 270 4000',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.8,
    reviewCount: 420,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'cafe', 'ev_fast_charger', 'car_wash'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1280, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 10 * 60000).toISOString() },
      premium_petrol: { type: 'premium_petrol', price: 1460, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 15 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1400, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 30 * 60000).toISOString() },
      cng: { type: 'cng', price: 230, unit: '₦/kg', status: 'available', lastUpdated: new Date(Date.now() - 60 * 60000).toISOString() },
      ev: { type: 'ev', price: 150, unit: '₦/kWh', status: 'available', lastUpdated: new Date(Date.now() - 5 * 60000).toISOString() }
    },
    reportsCount: 88,
    lastReportedTimestamp: new Date(Date.now() - 10 * 60000).toISOString()
  },
  {
    id: 'st-ng-002',
    name: 'Ardova (AP) Station, Ikeja Along',
    brand: 'Ardova PLC (AP)',
    address: 'Obafemi Awolowo Way, Ikeja',
    city: 'Lagos',
    state: 'Lagos State',
    lat: 6.5965,
    lng: 3.3421,
    phone: '+234 803 123 4567',
    openingHours: '05:30 AM - 11:00 PM',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 310,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'mechanic'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1260, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 25 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1380, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 20 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1400, unit: '₦/L', status: 'low_stock', lastUpdated: new Date(Date.now() - 40 * 60000).toISOString() }
    },
    reportsCount: 62,
    lastReportedTimestamp: new Date(Date.now() - 20 * 60000).toISOString()
  },
  {
    id: 'st-ng-003',
    name: 'Enyo Retail Mega Station, Lekki Phase 1',
    brand: 'Enyo Retail',
    address: 'Lekki-Epe Expressway, Lekki Phase 1',
    city: 'Lagos',
    state: 'Lagos State',
    lat: 6.4474,
    lng: 3.4723,
    phone: '+234 1 904 1000',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 295,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'cafe', 'car_wash', 'ev_fast_charger'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1290, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 8 * 60000).toISOString() },
      premium_petrol: { type: 'premium_petrol', price: 1480, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 12 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1390, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 15 * 60000).toISOString() },
      cng: { type: 'cng', price: 230, unit: '₦/kg', status: 'available', lastUpdated: new Date(Date.now() - 2 * 60000).toISOString() }
    },
    reportsCount: 112,
    lastReportedTimestamp: new Date(Date.now() - 2 * 60000).toISOString()
  },

  // ==========================================
  // ABUJA FCT
  // ==========================================
  {
    id: 'st-ng-004',
    name: 'NNPC Retail Mega Station, CBD Abuja',
    brand: 'NNPC Retail',
    address: 'Central Business District, Near National Mosque',
    city: 'Abuja',
    state: 'FCT Abuja',
    lat: 9.0579,
    lng: 7.4951,
    phone: '+234 9 460 8000',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 540,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'cng_station', 'cafe'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1200, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 5 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1350, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 10 * 60000).toISOString() },
      cng: { type: 'cng', price: 230, unit: '₦/kg', status: 'available', lastUpdated: new Date(Date.now() - 1 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1380, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 40 * 60000).toISOString() }
    },
    reportsCount: 145,
    lastReportedTimestamp: new Date(Date.now() - 1 * 60000).toISOString()
  },
  {
    id: 'st-ng-005',
    name: 'Conoil Filling Station, Wuse Zone 3',
    brand: 'Conoil',
    address: 'Herbert Macaulay Way, Wuse Zone 3',
    city: 'Abuja',
    state: 'FCT Abuja',
    lat: 9.0664,
    lng: 7.4712,
    phone: '+234 802 999 8888',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 220,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1270, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 20 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1370, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 25 * 60000).toISOString() }
    },
    reportsCount: 54,
    lastReportedTimestamp: new Date(Date.now() - 20 * 60000).toISOString()
  },

  // ==========================================
  // KANO STATE
  // ==========================================
  {
    id: 'st-ng-006',
    name: 'NNPC Mega Station, Kano Central',
    brand: 'NNPC Retail',
    address: 'Murtala Mohammed Way, Kano City',
    city: 'Kano',
    state: 'Kano State',
    lat: 12.0022,
    lng: 8.5920,
    phone: '+234 64 632 100',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 380,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'mechanic'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1220, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 15 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1360, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 35 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1400, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 50 * 60000).toISOString() }
    },
    reportsCount: 76,
    lastReportedTimestamp: new Date(Date.now() - 15 * 60000).toISOString()
  },

  // ==========================================
  // RIVERS STATE (PORT HARCOURT)
  // ==========================================
  {
    id: 'st-ng-007',
    name: 'MRS Oil, Aba Road Port Harcourt',
    brand: 'MRS Oil',
    address: 'Aba Road by Garrison Junction, Port Harcourt',
    city: 'Port Harcourt',
    state: 'Rivers State',
    lat: 4.8156,
    lng: 7.0498,
    phone: '+234 84 230 450',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 260,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'car_wash'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1280, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 18 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1380, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 30 * 60000).toISOString() }
    },
    reportsCount: 48,
    lastReportedTimestamp: new Date(Date.now() - 18 * 60000).toISOString()
  },

  // ==========================================
  // OYO STATE (IBADAN)
  // ==========================================
  {
    id: 'st-ng-008',
    name: 'Bovas & Company Station, Bodija',
    brand: 'Bovas & Company',
    address: 'Bodija Market Road, Ibadan',
    city: 'Ibadan',
    state: 'Oyo State',
    lat: 7.4241,
    lng: 3.9056,
    phone: '+234 802 333 4455',
    openingHours: '06:00 AM - 09:30 PM',
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 610,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1230, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 4 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1350, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 15 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1380, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 25 * 60000).toISOString() }
    },
    reportsCount: 160,
    lastReportedTimestamp: new Date(Date.now() - 4 * 60000).toISOString()
  },

  // ==========================================
  // ENUGU STATE
  // ==========================================
  {
    id: 'st-ng-009',
    name: 'Mobil Filling Station, Ogui Road',
    brand: 'Mobil (11PLC)',
    address: 'Ogui Road by Stadium Junction, Enugu',
    city: 'Enugu',
    state: 'Enugu State',
    lat: 6.4484,
    lng: 7.5020,
    phone: '+234 42 250 110',
    openingHours: '06:00 AM - 09:00 PM',
    isOpenNow: true,
    rating: 4.4,
    reviewCount: 190,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1290, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 22 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1390, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 30 * 60000).toISOString() }
    },
    reportsCount: 39,
    lastReportedTimestamp: new Date(Date.now() - 22 * 60000).toISOString()
  },

  // ==========================================
  // KADUNA STATE
  // ==========================================
  {
    id: 'st-ng-010',
    name: 'NNPC Retail Station, Ahmadu Bello Way',
    brand: 'NNPC Retail',
    address: 'Ahmadu Bello Way, Kaduna',
    city: 'Kaduna',
    state: 'Kaduna State',
    lat: 10.5105,
    lng: 7.4165,
    phone: '+234 62 240 800',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 320,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water', 'cng_station'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1220, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 12 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1360, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 20 * 60000).toISOString() },
      cng: { type: 'cng', price: 230, unit: '₦/kg', status: 'available', lastUpdated: new Date(Date.now() - 8 * 60000).toISOString() }
    },
    reportsCount: 71,
    lastReportedTimestamp: new Date(Date.now() - 8 * 60000).toISOString()
  },

  // ==========================================
  // EDO STATE (BENIN CITY)
  // ==========================================
  {
    id: 'st-ng-011',
    name: 'Matrix Energy Station, Airport Road Benin',
    brand: 'Matrix Energy',
    address: 'Airport Road, Benin City',
    city: 'Benin City',
    state: 'Edo State',
    lat: 6.3150,
    lng: 5.6100,
    phone: '+234 803 777 9900',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 230,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1270, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 14 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1370, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 28 * 60000).toISOString() }
    },
    reportsCount: 42,
    lastReportedTimestamp: new Date(Date.now() - 14 * 60000).toISOString()
  },

  // ==========================================
  // OGUN STATE (ABEOKUTA)
  // ==========================================
  {
    id: 'st-ng-012',
    name: 'Bovas & Company, Ibara Abeokuta',
    brand: 'Bovas & Company',
    address: 'Lalubu Street, Ibara, Abeokuta',
    city: 'Abeokuta',
    state: 'Ogun State',
    lat: 7.1475,
    lng: 3.3619,
    phone: '+234 802 111 9988',
    openingHours: '06:00 AM - 09:30 PM',
    isOpenNow: true,
    rating: 4.9,
    reviewCount: 340,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1240, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 7 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1350, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 20 * 60000).toISOString() }
    },
    reportsCount: 98,
    lastReportedTimestamp: new Date(Date.now() - 7 * 60000).toISOString()
  },

  // ==========================================
  // AKWA IBOM STATE (UYO)
  // ==========================================
  {
    id: 'st-ng-013',
    name: 'TotalEnergies Station, Abak Road Uyo',
    brand: 'TotalEnergies',
    address: 'Abak Road by Plaza Roundabout, Uyo',
    city: 'Uyo',
    state: 'Akwa Ibom State',
    lat: 5.0377,
    lng: 7.9128,
    phone: '+234 85 200 300',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 210,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1280, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 11 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1380, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 25 * 60000).toISOString() }
    },
    reportsCount: 52,
    lastReportedTimestamp: new Date(Date.now() - 11 * 60000).toISOString()
  },

  // ==========================================
  // PLATEAU STATE (JOS)
  // ==========================================
  {
    id: 'st-ng-014',
    name: 'NNPC Mega Station, Ahmadu Bello Way Jos',
    brand: 'NNPC Retail',
    address: 'Ahmadu Bello Way, Jos',
    city: 'Jos',
    state: 'Plateau State',
    lat: 9.8965,
    lng: 8.8583,
    phone: '+234 73 450 120',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 360,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1260, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 16 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1370, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 32 * 60000).toISOString() }
    },
    reportsCount: 79,
    lastReportedTimestamp: new Date(Date.now() - 16 * 60000).toISOString()
  },

  // ==========================================
  // SOKOTO STATE
  // ==========================================
  {
    id: 'st-ng-015',
    name: 'AA Rano Station, Sultan Abubakar Way Sokoto',
    brand: 'AA Rano',
    address: 'Sultan Abubakar Way, Sokoto',
    city: 'Sokoto',
    state: 'Sokoto State',
    lat: 13.0059,
    lng: 5.2476,
    phone: '+234 60 230 400',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 270,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1270, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 21 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1380, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 40 * 60000).toISOString() }
    },
    reportsCount: 45,
    lastReportedTimestamp: new Date(Date.now() - 21 * 60000).toISOString()
  },
  // ==========================================
  // ABIA STATE
  // ==========================================
  {
    id: 'st-ng-016',
    name: 'TotalEnergies Station, Aba Road Umuahia',
    brand: 'TotalEnergies',
    address: 'Aba Road, Umuahia',
    city: 'Umuahia',
    state: 'Abia State',
    lat: 5.525,
    lng: 7.486,
    phone: '+234 803 201 5567',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 168,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1235, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 12 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1680, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 20 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1620, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 35 * 60000).toISOString() }
    },
    reportsCount: 58,
    lastReportedTimestamp: new Date(Date.now() - 12 * 60000).toISOString()
  },

  // ==========================================
  // ADAMAWA STATE
  // ==========================================
  {
    id: 'st-ng-017',
    name: 'MRS Station, Bekaji Yola',
    brand: 'MRS',
    address: 'Bekaji Bypass, Yola',
    city: 'Yola',
    state: 'Adamawa State',
    lat: 9.2035,
    lng: 12.4954,
    phone: '+234 805 662 1190',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.3,
    reviewCount: 97,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1315, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 13 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1790, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 21 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1730, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 36 * 60000).toISOString() }
    },
    reportsCount: 34,
    lastReportedTimestamp: new Date(Date.now() - 13 * 60000).toISOString()
  },

  // ==========================================
  // ANAMBRA STATE
  // ==========================================
  {
    id: 'st-ng-018',
    name: 'Conoil Station, Zik Avenue Awka',
    brand: 'Conoil',
    address: 'Zik Avenue, Awka',
    city: 'Awka',
    state: 'Anambra State',
    lat: 6.2126,
    lng: 7.0742,
    phone: '+234 803 344 8821',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 214,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'car_wash', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1245, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 14 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1700, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 22 * 60000).toISOString() }
    },
    reportsCount: 71,
    lastReportedTimestamp: new Date(Date.now() - 14 * 60000).toISOString()
  },

  // ==========================================
  // BAUCHI STATE
  // ==========================================
  {
    id: 'st-ng-019',
    name: 'NNPC Retail Station, Yandoka Road Bauchi',
    brand: 'NNPC Retail',
    address: 'Yandoka Road, Bauchi',
    city: 'Bauchi',
    state: 'Bauchi State',
    lat: 10.3103,
    lng: 9.8439,
    phone: '+234 77 254 3312',
    openingHours: '06:00 AM - 09:00 PM',
    isOpenNow: true,
    rating: 4.2,
    reviewCount: 88,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1305, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 15 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1760, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 23 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1700, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 38 * 60000).toISOString() }
    },
    reportsCount: 29,
    lastReportedTimestamp: new Date(Date.now() - 15 * 60000).toISOString()
  },

  // ==========================================
  // BAYELSA STATE
  // ==========================================
  {
    id: 'st-ng-020',
    name: 'Rainoil Station, Mbiama-Yenagoa Road',
    brand: 'Rainoil',
    address: 'Mbiama-Yenagoa Road, Yenagoa',
    city: 'Yenagoa',
    state: 'Bayelsa State',
    lat: 4.9247,
    lng: 6.2642,
    phone: '+234 803 771 4420',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.4,
    reviewCount: 132,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1225, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 16 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1680, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 24 * 60000).toISOString() }
    },
    reportsCount: 47,
    lastReportedTimestamp: new Date(Date.now() - 16 * 60000).toISOString()
  },

  // ==========================================
  // BENUE STATE
  // ==========================================
  {
    id: 'st-ng-021',
    name: 'Oando Station, Old Otukpo Road Makurdi',
    brand: 'Oando',
    address: 'Old Otukpo Road, Makurdi',
    city: 'Makurdi',
    state: 'Benue State',
    lat: 7.7322,
    lng: 8.5391,
    phone: '+234 803 552 9012',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 176,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'mechanic'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1255, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 17 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1710, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 25 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1650, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 40 * 60000).toISOString() }
    },
    reportsCount: 63,
    lastReportedTimestamp: new Date(Date.now() - 17 * 60000).toISOString()
  },

  // ==========================================
  // BORNO STATE
  // ==========================================
  {
    id: 'st-ng-022',
    name: 'NIPCO Station, Post Office Road Maiduguri',
    brand: 'NIPCO',
    address: 'Post Office Road, Maiduguri',
    city: 'Maiduguri',
    state: 'Borno State',
    lat: 11.8333,
    lng: 13.15,
    phone: '+234 76 232 1145',
    openingHours: '06:30 AM - 08:00 PM',
    isOpenNow: true,
    rating: 4.1,
    reviewCount: 74,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1330, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 18 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1810, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 26 * 60000).toISOString() }
    },
    reportsCount: 22,
    lastReportedTimestamp: new Date(Date.now() - 18 * 60000).toISOString()
  },

  // ==========================================
  // CROSS RIVER STATE
  // ==========================================
  {
    id: 'st-ng-023',
    name: 'TotalEnergies Station, Marian Road Calabar',
    brand: 'TotalEnergies',
    address: 'Marian Road, Calabar',
    city: 'Calabar',
    state: 'Cross River State',
    lat: 4.9757,
    lng: 8.3417,
    phone: '+234 803 991 2234',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.7,
    reviewCount: 241,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'cafe', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1215, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 19 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1650, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 27 * 60000).toISOString() }
    },
    reportsCount: 84,
    lastReportedTimestamp: new Date(Date.now() - 19 * 60000).toISOString()
  },

  // ==========================================
  // DELTA STATE
  // ==========================================
  {
    id: 'st-ng-024',
    name: 'Ardova (AP) Station, Effurun-Sapele Road',
    brand: 'Ardova PLC (AP)',
    address: 'Effurun-Sapele Road, Warri',
    city: 'Warri',
    state: 'Delta State',
    lat: 5.5544,
    lng: 5.7932,
    phone: '+234 803 445 7789',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 198,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'car_wash'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1210, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 20 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1640, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 28 * 60000).toISOString() }
    },
    reportsCount: 69,
    lastReportedTimestamp: new Date(Date.now() - 20 * 60000).toISOString()
  },

  // ==========================================
  // EBONYI STATE
  // ==========================================
  {
    id: 'st-ng-025',
    name: 'Conoil Station, Ogoja Road Abakaliki',
    brand: 'Conoil',
    address: 'Ogoja Road, Abakaliki',
    city: 'Abakaliki',
    state: 'Ebonyi State',
    lat: 6.3249,
    lng: 8.1137,
    phone: '+234 803 227 6641',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.3,
    reviewCount: 102,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1260, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 21 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1720, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 29 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1660, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 44 * 60000).toISOString() }
    },
    reportsCount: 38,
    lastReportedTimestamp: new Date(Date.now() - 21 * 60000).toISOString()
  },

  // ==========================================
  // EKITI STATE
  // ==========================================
  {
    id: 'st-ng-026',
    name: 'Bovas Station, Ado-Iyin Road Ado-Ekiti',
    brand: 'Bovas',
    address: 'Ado-Iyin Road, Ado-Ekiti',
    city: 'Ado-Ekiti',
    state: 'Ekiti State',
    lat: 7.6211,
    lng: 5.2214,
    phone: '+234 803 118 4432',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 145,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1200, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 22 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1630, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 30 * 60000).toISOString() }
    },
    reportsCount: 52,
    lastReportedTimestamp: new Date(Date.now() - 22 * 60000).toISOString()
  },

  // ==========================================
  // GOMBE STATE
  // ==========================================
  {
    id: 'st-ng-027',
    name: 'MRS Station, Biu Bypass Gombe',
    brand: 'MRS',
    address: 'Biu Bypass, Gombe',
    city: 'Gombe',
    state: 'Gombe State',
    lat: 10.2897,
    lng: 11.1673,
    phone: '+234 72 221 3390',
    openingHours: '06:00 AM - 09:00 PM',
    isOpenNow: true,
    rating: 4.1,
    reviewCount: 63,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1320, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 23 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1790, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 31 * 60000).toISOString() }
    },
    reportsCount: 19,
    lastReportedTimestamp: new Date(Date.now() - 23 * 60000).toISOString()
  },

  // ==========================================
  // IMO STATE
  // ==========================================
  {
    id: 'st-ng-028',
    name: 'Enyo Retail Station, Wetheral Road Owerri',
    brand: 'Enyo Retail',
    address: 'Wetheral Road, Owerri',
    city: 'Owerri',
    state: 'Imo State',
    lat: 5.4836,
    lng: 7.0333,
    phone: '+234 803 661 2298',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 187,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'cafe', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1240, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 24 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1690, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 32 * 60000).toISOString() }
    },
    reportsCount: 66,
    lastReportedTimestamp: new Date(Date.now() - 24 * 60000).toISOString()
  },

  // ==========================================
  // JIGAWA STATE
  // ==========================================
  {
    id: 'st-ng-029',
    name: 'AA Rano Station, Kiyawa Road Dutse',
    brand: 'AA Rano',
    address: 'Kiyawa Road, Dutse',
    city: 'Dutse',
    state: 'Jigawa State',
    lat: 11.7561,
    lng: 9.3392,
    phone: '+234 64 720 1156',
    openingHours: '06:00 AM - 09:00 PM',
    isOpenNow: true,
    rating: 4.0,
    reviewCount: 49,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1335, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 25 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1815, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 33 * 60000).toISOString() }
    },
    reportsCount: 15,
    lastReportedTimestamp: new Date(Date.now() - 25 * 60000).toISOString()
  },

  // ==========================================
  // KATSINA STATE
  // ==========================================
  {
    id: 'st-ng-030',
    name: 'Northwest Petroleum Station, Kofar Kaura Katsina',
    brand: 'Northwest Petroleum & Gas',
    address: 'Kofar Kaura Road, Katsina',
    city: 'Katsina',
    state: 'Katsina State',
    lat: 12.9908,
    lng: 7.6018,
    phone: '+234 65 431 2287',
    openingHours: '06:00 AM - 09:00 PM',
    isOpenNow: true,
    rating: 4.2,
    reviewCount: 81,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1300, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 26 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1770, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 34 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1710, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 49 * 60000).toISOString() }
    },
    reportsCount: 27,
    lastReportedTimestamp: new Date(Date.now() - 26 * 60000).toISOString()
  },

  // ==========================================
  // KEBBI STATE
  // ==========================================
  {
    id: 'st-ng-031',
    name: 'NNPC Retail Station, Bunza Road Birnin Kebbi',
    brand: 'NNPC Retail',
    address: 'Bunza Road, Birnin Kebbi',
    city: 'Birnin Kebbi',
    state: 'Kebbi State',
    lat: 12.4536,
    lng: 4.1975,
    phone: '+234 68 320 5541',
    openingHours: '06:00 AM - 08:30 PM',
    isOpenNow: true,
    rating: 4.0,
    reviewCount: 52,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1310, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 27 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1785, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 35 * 60000).toISOString() }
    },
    reportsCount: 17,
    lastReportedTimestamp: new Date(Date.now() - 27 * 60000).toISOString()
  },

  // ==========================================
  // KOGI STATE
  // ==========================================
  {
    id: 'st-ng-032',
    name: 'Oando Station, Murtala Mohammed Way Lokoja',
    brand: 'Oando',
    address: 'Murtala Mohammed Way, Lokoja',
    city: 'Lokoja',
    state: 'Kogi State',
    lat: 7.8023,
    lng: 6.7337,
    phone: '+234 803 227 8814',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.4,
    reviewCount: 119,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1250, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 28 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1700, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 36 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1640, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 51 * 60000).toISOString() }
    },
    reportsCount: 41,
    lastReportedTimestamp: new Date(Date.now() - 28 * 60000).toISOString()
  },

  // ==========================================
  // NASARAWA STATE
  // ==========================================
  {
    id: 'st-ng-033',
    name: 'Conoil Station, Shendam Road Lafia',
    brand: 'Conoil',
    address: 'Shendam Road, Lafia',
    city: 'Lafia',
    state: 'Nasarawa State',
    lat: 8.4939,
    lng: 8.5163,
    phone: '+234 47 221 3067',
    openingHours: '06:00 AM - 10:00 PM',
    isOpenNow: true,
    rating: 4.3,
    reviewCount: 94,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1265, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 29 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1725, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 37 * 60000).toISOString() }
    },
    reportsCount: 32,
    lastReportedTimestamp: new Date(Date.now() - 29 * 60000).toISOString()
  },

  // ==========================================
  // NIGER STATE
  // ==========================================
  {
    id: 'st-ng-034',
    name: 'TotalEnergies Station, Kpakungu Road Minna',
    brand: 'TotalEnergies',
    address: 'Kpakungu Road, Minna',
    city: 'Minna',
    state: 'Niger State',
    lat: 9.6139,
    lng: 6.5569,
    phone: '+234 66 222 1450',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.5,
    reviewCount: 138,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'car_wash'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1235, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 30 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1690, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 38 * 60000).toISOString() },
      kerosene: { type: 'kerosene', price: 1630, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 53 * 60000).toISOString() }
    },
    reportsCount: 49,
    lastReportedTimestamp: new Date(Date.now() - 30 * 60000).toISOString()
  },

  // ==========================================
  // ONDO STATE
  // ==========================================
  {
    id: 'st-ng-035',
    name: 'Ardova (AP) Station, Oyemekun Road Akure',
    brand: 'Ardova PLC (AP)',
    address: 'Oyemekun Road, Akure',
    city: 'Akure',
    state: 'Ondo State',
    lat: 7.2526,
    lng: 5.1931,
    phone: '+234 803 552 6690',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.6,
    reviewCount: 163,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store', 'air_water'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1205, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 31 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1635, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 39 * 60000).toISOString() }
    },
    reportsCount: 57,
    lastReportedTimestamp: new Date(Date.now() - 31 * 60000).toISOString()
  },

  // ==========================================
  // OSUN STATE
  // ==========================================
  {
    id: 'st-ng-036',
    name: 'Bovas Station, Gbongan Road Osogbo',
    brand: 'Bovas',
    address: 'Gbongan Road, Osogbo',
    city: 'Osogbo',
    state: 'Osun State',
    lat: 7.7719,
    lng: 4.5569,
    phone: '+234 803 449 1187',
    openingHours: '24/7 Open',
    isOpenNow: true,
    rating: 4.4,
    reviewCount: 127,
    photos: [
      'https://images.unsplash.com/photo-1527018601619-a508a2be00d6?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1210, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 32 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1645, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 40 * 60000).toISOString() }
    },
    reportsCount: 44,
    lastReportedTimestamp: new Date(Date.now() - 32 * 60000).toISOString()
  },

  // ==========================================
  // TARABA STATE
  // ==========================================
  {
    id: 'st-ng-037',
    name: 'MRS Station, Barade Road Jalingo',
    brand: 'MRS',
    address: 'Barade Road, Jalingo',
    city: 'Jalingo',
    state: 'Taraba State',
    lat: 8.8833,
    lng: 11.3667,
    phone: '+234 79 221 4470',
    openingHours: '06:30 AM - 08:30 PM',
    isOpenNow: true,
    rating: 4.0,
    reviewCount: 45,
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1325, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 33 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1800, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 41 * 60000).toISOString() }
    },
    reportsCount: 14,
    lastReportedTimestamp: new Date(Date.now() - 33 * 60000).toISOString()
  },

  // ==========================================
  // YOBE STATE
  // ==========================================
  {
    id: 'st-ng-038',
    name: 'NNPC Retail Station, Potiskum Road Damaturu',
    brand: 'NNPC Retail',
    address: 'Potiskum Road, Damaturu',
    city: 'Damaturu',
    state: 'Yobe State',
    lat: 11.747,
    lng: 11.961,
    phone: '+234 74 522 1189',
    openingHours: '06:00 AM - 09:00 PM',
    isOpenNow: true,
    rating: 4.0,
    reviewCount: 38,
    photos: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1340, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 34 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1820, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 42 * 60000).toISOString() }
    },
    reportsCount: 12,
    lastReportedTimestamp: new Date(Date.now() - 34 * 60000).toISOString()
  },

  // ==========================================
  // ZAMFARA STATE
  // ==========================================
  {
    id: 'st-ng-039',
    name: 'Northwest Petroleum Station, Sokoto Road Gusau',
    brand: 'Northwest Petroleum & Gas',
    address: 'Sokoto Road, Gusau',
    city: 'Gusau',
    state: 'Zamfara State',
    lat: 12.1704,
    lng: 6.6641,
    phone: '+234 63 209 5563',
    openingHours: '06:00 AM - 09:00 PM',
    isOpenNow: true,
    rating: 4.1,
    reviewCount: 56,
    photos: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['atm', 'washroom', 'store'],
    fuelPrices: {
      petrol: { type: 'petrol', price: 1295, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 35 * 60000).toISOString() },
      diesel: { type: 'diesel', price: 1765, unit: '₦/L', status: 'available', lastUpdated: new Date(Date.now() - 43 * 60000).toISOString() }
    },
    reportsCount: 18,
    lastReportedTimestamp: new Date(Date.now() - 35 * 60000).toISOString()
  },
];

export const INITIAL_REPORTS = [
  {
    id: 'rep-ng-ilr-101',
    stationId: 'st-ng-ilr-001',
    stationName: 'Bovas & Company Station, Challenge Ilorin',
    userName: 'Kwara Commuter (Ilorin)',
    fuelType: 'petrol',
    isAvailable: true,
    reportedPrice: 1240,
    notes: 'Bovas Challenge Ilorin selling at ₦1,240/L rate! Smooth fast-moving queue.',
    timestamp: new Date(Date.now() - 3 * 60000).toISOString()
  },
  {
    id: 'rep-ng-ilr-102',
    stationId: 'st-ng-ilr-002',
    stationName: 'NNPC Retail Mega Station, Offa Garage Ilorin',
    userName: 'Abiodun Lawal (Taxify Ilorin)',
    fuelType: 'cng',
    isAvailable: true,
    reportedPrice: 230,
    notes: 'CNG gas pump fully operational for converted Keke & taxis at Offa Garage.',
    timestamp: new Date(Date.now() - 2 * 60000).toISOString()
  },
  {
    id: 'rep-ng-101',
    stationId: 'st-ng-004',
    stationName: 'NNPC Retail Mega Station, CBD Abuja',
    userName: 'Ibrahim Musa (Verified Driver)',
    fuelType: 'petrol',
    isAvailable: true,
    reportedPrice: 1200,
    notes: 'No long queues! All pumps dispensing PMS smoothly at ₦1,200/L.',
    timestamp: new Date(Date.now() - 5 * 60000).toISOString()
  },
  {
    id: 'rep-ng-102',
    stationId: 'st-ng-001',
    stationName: 'TotalEnergies Station, Victoria Island',
    userName: 'Chinedu Okonkwo (Verified Driver)',
    fuelType: 'cng',
    isAvailable: true,
    reportedPrice: 230,
    notes: 'CNG gas dispenser active at ₦230/kg. PMS available at ₦1,280/L.',
    timestamp: new Date(Date.now() - 10 * 60000).toISOString()
  },
  {
    id: 'rep-ng-103',
    stationId: 'st-ng-008',
    stationName: 'Bovas & Company Station, Bodija',
    userName: 'Aisha Babangida',
    fuelType: 'petrol',
    isAvailable: true,
    reportedPrice: 1230,
    notes: 'Bovas selling at ₦1,230 rate. Clean metered pumps.',
    timestamp: new Date(Date.now() - 4 * 60000).toISOString()
  }
];
