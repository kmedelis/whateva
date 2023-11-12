"use client"
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import SearchModal from "../SearchModal";
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from "./MobileMenu";


export default function MobileSearchAppBar({ uploadedAdvertisements }) {
    const [openSearch, setOpenSearch] = React.useState(false);
    const handleOpenSearch = () => setOpenSearch(true);
    const handleCloseSearch = () => setOpenSearch(false);

    const [openMenu, setOpenMenu] = React.useState(false);
    const handleOpenMenu = () => {
        console.log("opened")
        setOpenMenu(true);
    }
    const handleCloseMenu = () => {
        console.log("neega")
        setOpenMenu(false);
        console.log(openMenu)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Box mr={1} sx={{
                }}
                    onClick={handleOpenMenu}>
                    <MenuIcon />
                </Box>
                <MobileMenu openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        border: '1px solid white',
                        borderRadius: 1,
                        padding: '0 1rem',
                        cursor: 'pointer',
                        backgroundColor: 'white',
                        width: '50%',
                    }}
                    onClick={handleOpenSearch}
                >
                    <SearchIcon color="inherit" sx={{ color: 'black' }} />
                    <Typography sx={{ color: 'black' }} >Search</Typography>
                </Box>
                <SearchModal openSearch={openSearch} onClose={handleCloseSearch} uploadedAdvertisements={uploadedAdvertisements} />
            </Toolbar>
        </AppBar>

    )
}