"use client"
import React from 'react';
import { AppBar, Toolbar, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SearchModal from './SearchModal';
import { UploadedAdvertisement } from '@/models/UploadedAdvertisement';

interface SearchAppBarProps {
  uploadedAdvertisements: UploadedAdvertisement[]
}


const SearchAppBar: React.FC<SearchAppBarProps> = ({uploadedAdvertisements}) => {
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
            Search me bish
          </Box>
          <SearchModal open={open} onClose={handleClose} uploadedAdvertisements={uploadedAdvertisements}/>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default SearchAppBar;
