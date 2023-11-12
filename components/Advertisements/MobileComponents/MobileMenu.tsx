"use client"
import { Button, Dialog } from '@mui/material';

interface MobileMenuProps {
    openMenu: boolean;
    handleCloseMenu: () => void;
}

export default function MobileMenu({ openMenu, handleCloseMenu }: MobileMenuProps) {
    return (
        <Dialog
            open={openMenu}
            fullScreen
            fullWidth>
            <Button onClick={handleCloseMenu}>close</Button>
        </Dialog>
    )
}