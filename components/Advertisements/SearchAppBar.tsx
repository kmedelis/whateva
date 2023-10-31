"use client"
import React, { Dispatch, SetStateAction } from 'react';
import { AppBar, Toolbar, Box, Button, Hidden } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SearchModal from './SearchModal';
import { UploadedAdvertisement } from '@/models/UploadedAdvertisement';
import RentalPriceSelectPopover from './RentalPriceSelectPopover';
import YearSelectPopover from './YearSelectPopover';

interface SearchAppBarProps {
  uploadedAdvertisements: UploadedAdvertisement[]
  setMinimumPriceFilter: Dispatch<SetStateAction<number>>
  setMaximumPriceFilter: Dispatch<SetStateAction<number>>
  setFilterMinimumYear: Dispatch<SetStateAction<number>>
  setFilterMaximumYear: Dispatch<SetStateAction<number>>
  minYear: number;
  maxYear: number;
}


const SearchAppBar: React.FC<SearchAppBarProps> = ({ uploadedAdvertisements, setMinimumPriceFilter, setMaximumPriceFilter, setFilterMinimumYear, setFilterMaximumYear, minYear, maxYear }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              border: '1px solid white',
              borderRadius: 1,
              padding: '0 1rem',
              cursor: 'pointer'
            }}
            onClick={handleOpen}
          >
            <SearchIcon color="inherit" />
            Search
          </Box>
          <Hidden smDown>
            {/* <RentalPriceSelectPopover setMinimumPriceFilter={setMinimumPriceFilter} setMaximumPriceFilter={setMaximumPriceFilter}/> */}
          </Hidden>
          <Hidden smUp>
            <RentalPriceSelectPopover setMinimumPriceFilter={setMinimumPriceFilter} setMaximumPriceFilter={setMaximumPriceFilter} />
            <YearSelectPopover setFilterMinimumYear={setFilterMinimumYear} setFilterMaximumYear={setFilterMaximumYear} minYear={minYear} maxYear={maxYear}/>
          </Hidden>
          <SearchModal open={open} onClose={handleClose} uploadedAdvertisements={uploadedAdvertisements} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default SearchAppBar;
