"use client"

import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

interface NavBarProps {
  sections: { id: string, name: string }[];
}

const Navbar: React.FC<NavBarProps> = ({ sections }) => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - (element.clientHeight || 0) + 20;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {sections.map((section) => (
          <Button key={section.id} color="inherit" onClick={() => handleScroll(section.id)}>
            {section.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
