"use client"
import React, { Dispatch, SetStateAction } from 'react';
import { AppBar, Toolbar, Box, Button, Hidden } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SearchModal from './SearchModal';
import { UploadedAdvertisement } from '@/models/UploadedAdvertisement';
import RentalPriceSelect from './RentalPriceSelect';
import RentalPriceSelectPopover from './RentalPriceSelectMobile';

interface SearchAppBarProps {
  uploadedAdvertisements: UploadedAdvertisement[]
  setMinimumPriceFilter: Dispatch<SetStateAction<number>>
  setMaximumPriceFilter: Dispatch<SetStateAction<number>>
}


const SearchAppBar: React.FC<SearchAppBarProps> = ({ uploadedAdvertisements, setMinimumPriceFilter, setMaximumPriceFilter }) => {
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
            <RentalPriceSelect></RentalPriceSelect>
          </Hidden>
          <Hidden smUp>
            <RentalPriceSelectPopover setMinimumPriceFilter={setMinimumPriceFilter} setMaximumPriceFilter={setMaximumPriceFilter}/>
          </Hidden>
          <SearchModal open={open} onClose={handleClose} uploadedAdvertisements={uploadedAdvertisements} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default SearchAppBar;
