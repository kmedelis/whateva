import React from 'react';
import { Hidden } from "@mui/material";
import SearchAppBar from '@/components/Advertisements/MobileComponents/MobileFilterAppBar';
import MainAppBar from '@/components/Advertisements/DesktopComponents/ComputerMainAppBar';
import { getAllUploadedAdvertisements } from '@/utils/general/uploadedAdvertisementService';
import { getAdvertisements } from '@/utils/general/advertisementService';
import AdvertisementCard from '@/components/Advertisements/MobileComponents/MobileAdvertisementCard';
import MobileComponents from '@/components/Advertisements/MobileComponents/MobileComponents';
import ComputerComponents from '@/components/Advertisements/DesktopComponents/ComputerComponents';

export default async function CustomAppBar({ params }) {
  const uploadedAdvertisements = await getAllUploadedAdvertisements();
  uploadedAdvertisements.sort((a, b) => b.timesSearched - a.timesSearched);

  const addresses = params.advertisements[0].split('%26'); // %26 = &

  let filteredAdvertisementsSet = new Set(); // used to filter unique addresses

  for (let address of addresses) {
    const [city, neighborhood, street] = address.split('-');
    const ads = await getAdvertisements(city, neighborhood, street);

    for (let ad of ads) {
      filteredAdvertisementsSet.add(JSON.stringify(ad));
    }
  }

  const filteredAdvertisements = Array.from(filteredAdvertisementsSet, ad => JSON.parse(ad));

  return (
    <div>
      <Hidden smDown>
        <ComputerComponents advertisements={filteredAdvertisements} searchAdvertisemenents={uploadedAdvertisements}/>
      </Hidden>
      <Hidden smUp>
        <MobileComponents advertisements={filteredAdvertisements} searchAdvertisemenents={uploadedAdvertisements}/>
      </Hidden>
    </div>
  );
}
