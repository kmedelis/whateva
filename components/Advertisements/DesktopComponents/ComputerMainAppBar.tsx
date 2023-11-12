import React from 'react';
import { AppBar, Button, Toolbar, Box } from "@mui/material";

export default function ComputerMainAppBar() {
  return (
      <AppBar position="static">
        <Toolbar>
          {/* Language option on the left */}
          <Button color="inherit" sx={{ marginRight: 'auto'}}>
            Language
          </Button>

          {/* Other options on the right */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit">Manage rentals</Button>
            <Button color="inherit">Signup</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Add property</Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
