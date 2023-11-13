"use client";
import React, { Dispatch, SetStateAction } from "react";
import { AppBar, Toolbar, Box, Button, Hidden } from "@mui/material";
import { UploadedAdvertisement } from "@/models/UploadedAdvertisement";
import RentalPriceSelectPopover from "../RentalPriceSelectPopover";
import YearSelectPopover from "../YearSelectPopover";
import HouseTypeSelectPopover from "../HouseTypeSelectPopover";

interface MobileFilterAppBarProps {
  setMinimumPriceFilter: Dispatch<SetStateAction<number>>;
  setMaximumPriceFilter: Dispatch<SetStateAction<number>>;
  setFilterMinimumYear: Dispatch<SetStateAction<number>>;
  setFilterMaximumYear: Dispatch<SetStateAction<number>>;
  minYear: number;
  maxYear: number;
  setIsPopoverOpen: Dispatch<SetStateAction<boolean>>;
  setFilterHouseType: Dispatch<
    SetStateAction<{
      apartments: boolean;
      duplex: boolean;
      houses: boolean;
      other: boolean;
    }>
  >;
  filterHouseType: { apartments: boolean; duplex: boolean; houses: boolean; other: boolean; };
}

const MobileFilterAppBar: React.FC<MobileFilterAppBarProps> = ({
  setMinimumPriceFilter,
  setMaximumPriceFilter,
  setFilterMinimumYear,
  setFilterMaximumYear,
  setFilterHouseType,
  filterHouseType, 
  minYear,
  maxYear,
  setIsPopoverOpen,
}) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Hidden smUp>
            <RentalPriceSelectPopover
              setMinimumPriceFilter={setMinimumPriceFilter}
              setMaximumPriceFilter={setMaximumPriceFilter}
              setIsPopoverOpen={setIsPopoverOpen}
            />
            <YearSelectPopover
              setFilterMinimumYear={setFilterMinimumYear}
              setFilterMaximumYear={setFilterMaximumYear}
              minYear={minYear}
              maxYear={maxYear}
              setIsPopoverOpen={setIsPopoverOpen}
            />
            <HouseTypeSelectPopover
              setIsPopoverOpen={setIsPopoverOpen}
              setFilterHouseType={setFilterHouseType}
              filterHouseType={filterHouseType}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MobileFilterAppBar;
