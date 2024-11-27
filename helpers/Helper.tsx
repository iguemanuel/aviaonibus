export type Passenger = {
  id: number;
  name: string;
  origin: string;
  destination: string;
  avatar: string;
};

export type Country = {
  country: string;
  passengers: Passenger[];
};

export function organizeByCountry(passengers: Passenger[]): Country[] {
  const countryMap: { [key: string]: Passenger[] } = {};

  passengers.forEach((passenger) => {
    if (!countryMap[passenger.origin]) {
      countryMap[passenger.origin] = [];
    }
    countryMap[passenger.origin].push(passenger);

    if (!countryMap[passenger.destination]) {
      countryMap[passenger.destination] = [];
    }
    countryMap[passenger.destination].push(passenger);
  });

  return Object.entries(countryMap)
    .map(([country, passengers]) => ({
      country,
      passengers,
    }))
    .sort((a, b) => a.country.localeCompare(b.country));
}
