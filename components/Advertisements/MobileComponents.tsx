"use client"
import React from 'react';
import AdvertisementCard from '@/components/Advertisements/AdvertisementCard';
import SearchAppBar from './SearchAppBar';

function MobileComponents({ advertisements, searchAdvertisemenents }) {
    return (
        <div>
            {advertisements[0].price}
            <SearchAppBar uploadedAdvertisements={searchAdvertisemenents} />
            {advertisements.map(ad => (
                <AdvertisementCard ad={ad} key={ad.id} />
            ))}
        </div>
    );
}

export default MobileComponents;
