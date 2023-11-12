"use client"
import React, { useState } from 'react';
import MobileAdvertisementCard from '@/components/Advertisements/MobileComponents/MobileAdvertisementCard';
import MobileFilterAppBar from './MobileFilterAppBar';
import MobileSearchAppBar from './MobileSearchAppBar';
import { Backdrop } from '@mui/material';

function MobileComponents({ advertisements, searchAdvertisemenents }) {

    const [filterMinimumPrice, setMinimumFilterPrice] = useState(0);
    const [filterMaximumPrice, setFilterMaximumPrice] = useState(1000000000);

    const [filterMinimumYear, setFilterMinimumYear] = useState(0);
    const [filterMaximumYear, setFilterMaximumYear] = useState(1000000000);

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    let filteredAdvertisements = advertisements.filter(ad => ad.price > filterMinimumPrice && ad.price <= filterMaximumPrice && ad.buildYear >= filterMinimumYear && ad.buildYear <= filterMaximumYear);
    const minBuildYear = Math.min(...advertisements.map(ad => ad.buildYear));
    const maxYear = new Date().getFullYear();

    return (
        <div>
            <Backdrop
                style={{ color: '#fff', zIndex: 1000 }}
                open={isPopoverOpen}
            />

            <div style={{ position: 'relative', zIndex: 1010 }}>
                <MobileSearchAppBar uploadedAdvertisements={searchAdvertisemenents} />
                <MobileFilterAppBar
                    uploadedAdvertisements={searchAdvertisemenents}
                    setMinimumPriceFilter={setMinimumFilterPrice}
                    setMaximumPriceFilter={setFilterMaximumPrice}
                    setFilterMinimumYear={setFilterMinimumYear}
                    setFilterMaximumYear={setFilterMaximumYear}
                    minYear={minBuildYear}
                    maxYear={maxYear}
                    setIsPopoverOpen={setIsPopoverOpen} // Pass this to the component
                />
            </div>

            {filteredAdvertisements.length > 0 ? (
                filteredAdvertisements.map(ad => (
                    <MobileAdvertisementCard ad={ad} key={ad.id} />
                ))
            ) : (
                <div>No advertisements available for the selected price.</div>
            )}
        </div>
    );
}

export default MobileComponents;
