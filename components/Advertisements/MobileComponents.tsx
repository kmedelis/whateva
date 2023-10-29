"use client"
import React, { useState } from 'react';
import AdvertisementCard from '@/components/Advertisements/AdvertisementCard';
import SearchAppBar from './SearchAppBar';

function MobileComponents({ advertisements, searchAdvertisemenents }) {

    const [filterMinimumPrice, setMinimumFilterPrice] = useState(0);
    const [filterMaximumPrice, setFilterMaximumPrice] = useState(10000000);

    const filteredAdvertisements = advertisements.filter(ad => ad.price > filterMinimumPrice && ad.price <= filterMaximumPrice);

    return (
        <div>
            <SearchAppBar uploadedAdvertisements={searchAdvertisemenents} setMinimumPriceFilter={setMinimumFilterPrice} setMaximumPriceFilter={setFilterMaximumPrice}/>
            {filteredAdvertisements.length > 0 ? (
                filteredAdvertisements.map(ad => (
                    <AdvertisementCard ad={ad} key={ad.id} />
                ))
            ) : (
                <div>No advertisements available for the selected price.</div>
            )}
        </div>
    );
}

export default MobileComponents;
