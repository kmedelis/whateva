import React from 'react';
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import SearchAppBar from '@/components/Advertisements/SearchAppBar';
import MainAppBar from '@/components/Advertisements/MainAppBar';
import { getAllUploadedAdvertisements } from '@/utils/general/uploadedAdvertisementService';
import { getAdvertisements } from '@/utils/general/advertisementService';

export default async function CustomAppBar({ params }) {
  const uploadedAdvertisements = await getAllUploadedAdvertisements();
  uploadedAdvertisements.sort((a, b) => b.timesSearched - a.timesSearched);

  const [city, neighborhood, street] = params.advertisements[0].split('-');

  const filteredAdvertisements = await getAdvertisements(city, neighborhood, street);

  return (
    <div>
      {filteredAdvertisements.length}
      {city}
      {neighborhood}
      <MainAppBar />
      <SearchAppBar uploadedAdvertisements={uploadedAdvertisements} />
    </div>
  );
}
