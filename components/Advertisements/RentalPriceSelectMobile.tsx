import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Popover, TextField, Box } from '@mui/material';

function RentalPriceSelectPopover({ setMinimumPriceFilter, setMaximumPriceFilter }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMin, setSelectedMin] = useState('');
  const [selectedMax, setSelectedMax] = useState('');

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleMinimumInputChange = (event) => {
    setSelectedMin(event.target.value);
    setMinimumPriceFilter(event.target.value || '0');
  };

  const handleMaximumInputChange = (event) => {
    setSelectedMax(event.target.value);
    setMaximumPriceFilter(event.target.value || '999999999');
  };

  const handlePriceClick = (price) => {
    if (selectedMin === '') {
      setSelectedMin(price);
      setMinimumPriceFilter(price || '0');
    } else {
      setSelectedMax(price);
      setMaximumPriceFilter(price || '999999999');
      handlePopoverClose();
    }
  };

  const clearFilters = () => {
    setSelectedMin('');
    setSelectedMax('');
    setMinimumPriceFilter('0');
    setMaximumPriceFilter('999999999');
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlePopoverOpen}>
        Select Price
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List>
          <ListItem>
            <TextField
              value={selectedMin}
              size='small'
              type="number"
              inputProps={{ pattern: "\\d*" }}
              onChange={handleMinimumInputChange}
              placeholder="Minimum price"
            />
            <div>-</div>
            <TextField
              value={selectedMax}
              size='small'
              type="number"
              inputProps={{ pattern: "\\d*" }}
              onChange={handleMaximumInputChange}
              placeholder="Maximum price"
            />
          </ListItem>
          <ListItem button onClick={() => handlePriceClick('2000')}>
            <ListItemText primary="$2,000" />
          </ListItem>
          <ListItem button onClick={() => handlePriceClick('2500')}>
            <ListItemText primary="$2,500" />
          </ListItem>
          <ListItem button onClick={() => handlePriceClick('150000')}>
            <ListItemText primary="$150,000" />
          </ListItem>
        </List>
        <Box display="flex" justifyContent="space-between" p={1}>
          <Button onClick={clearFilters} size="small" variant="outlined">Clear</Button>
          <Button onClick={handlePopoverClose} size="small" variant="contained" color="primary">Done</Button>
        </Box>
      </Popover>
    </div>
  );
}

export default RentalPriceSelectPopover;
