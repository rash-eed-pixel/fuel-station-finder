export function calculateTripCost(
  distanceKm,
  mileageKmpl,
  pricePerUnit,
  fuelType = 'petrol'
) {
  const safeMileage = mileageKmpl > 0 ? mileageKmpl : 12; // default 12 km/L
  const totalUnitsNeeded = Math.round((distanceKm / safeMileage) * 10) / 10;
  const totalCost = Math.round(totalUnitsNeeded * pricePerUnit * 100) / 100;

  // CO2 multiplier approx (kg CO2 per liter)
  // Petrol: 2.31 kg/L, Diesel: 2.68 kg/L, CNG: 1.8 kg/kg, EV: 0.1 kg/kWh (grid avg)
  let co2Factor = 2.31;
  if (fuelType === 'diesel') co2Factor = 2.68;
  if (fuelType === 'cng') co2Factor = 1.8;
  if (fuelType === 'ev') co2Factor = 0.1;

  const co2EmissionsKg = Math.round(totalUnitsNeeded * co2Factor * 10) / 10;

  return {
    distanceKm,
    mileageKmpl: safeMileage,
    fuelType,
    pricePerUnit,
    totalUnitsNeeded,
    totalCost,
    co2EmissionsKg
  };
}
