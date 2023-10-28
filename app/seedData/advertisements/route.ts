"use server"
import { createAdvertisement } from "@/utils/general/advertisementService";

 
export async function POST() {

    const advertisement1 = {
        description: 'Discover Lakeshore East...',
        name: 'Is nais apartamnt',
        city: 'Vilnius',
        neighborhood: 'Naujamiestis',
        street: 'Basanaviciaus',
        houseNumber: '18',
        apartment_features: ['Pool', 'Gym', 'Wifi'],
        plotArea: 66.69,
        price: 100000,
        roomCount: 3,
        buildYear: 2022,
        floor: 3,
        totalFloors: 4,
        heating: 'Elektra, aeroterminis',
        buildingType: 'Mūrinis',
        energyConsumption: 'A++',
        finish: 'Dalinė apdaila',
    };

    const advertisement2 = {
      description: 'Discover Lakeshore East...',
      name: 'Is nais apartamnt',
      city: 'Vilnius',
      neighborhood: 'Naujamiestis',
      street: 'Basanaviciaus',
      houseNumber: '18',
      apartment_features: ['Pool', 'Gym', 'Wifi'],
      plotArea: 66.69,
      price: 100000,
      roomCount: 3,
      buildYear: 2022,
      floor: 3,
      totalFloors: 4,
      heating: 'Elektra, aeroterminis',
      buildingType: 'Mūrinis',
      energyConsumption: 'A++',
      finish: 'Dalinė apdaila',
  };

  const advertisement3 = {
    description: 'Discover Lakeshore East...',
    name: 'Is nais apartamnt',
    city: 'Kaunas',
    neighborhood: 'Naujamiestis',
    street: 'Basanaviciaus',
    houseNumber: '18',
    apartment_features: ['Pool', 'Gym', 'Wifi'],
    plotArea: 66.69,
    price: 100000,
    roomCount: 3,
    buildYear: 2022,
    floor: 3,
    totalFloors: 4,
    heating: 'Elektra, aeroterminis',
    buildingType: 'Mūrinis',
    energyConsumption: 'A++',
    finish: 'Dalinė apdaila',
};

    createAdvertisement(advertisement1)
    createAdvertisement(advertisement2)
    createAdvertisement(advertisement3)

  return Response.json({ now: Date.now() })
}