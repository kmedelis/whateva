"use client"
import React, { Dispatch, SetStateAction } from 'react';
import { AppBar, Toolbar, Box, Button, Hidden } from "@mui/material";
import { UploadedAdvertisement } from '@/models/UploadedAdvertisement';
import RentalPriceSelectPopover from '../RentalPriceSelectPopover';
import YearSelectPopover from '../YearSelectPopover';

interface MobileFilterAppBarProps {
  uploadedAdvertisements: UploadedAdvertisement[]
  setMinimumPriceFilter: Dispatch<SetStateAction<number>>
  setMaximumPriceFilter: Dispatch<SetStateAction<number>>
  setFilterMinimumYear: Dispatch<SetStateAction<number>>
  setFilterMaximumYear: Dispatch<SetStateAction<number>>
  minYear: number;
  maxYear: number;
  setIsPopoverOpen: Dispatch<SetStateAction<boolean>>
}


const MobileFilterAppBar: React.FC<MobileFilterAppBarProps> = ({ uploadedAdvertisements, setMinimumPriceFilter, setMaximumPriceFilter, setFilterMinimumYear, setFilterMaximumYear, minYear, maxYear, setIsPopoverOpen }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Hidden smUp>
            <RentalPriceSelectPopover setMinimumPriceFilter={setMinimumPriceFilter} setMaximumPriceFilter={setMaximumPriceFilter} setIsPopoverOpen={setIsPopoverOpen}/>
            <YearSelectPopover setFilterMinimumYear={setFilterMinimumYear} setFilterMaximumYear={setFilterMaximumYear} minYear={minYear} maxYear={maxYear}/>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MobileFilterAppBar;
