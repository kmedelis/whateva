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
        Price
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
          <Box display="flex" flexWrap="wrap" justifyContent="center" p={1}>
            <Button
              variant="outlined"
              color="primary"
              style={{ margin: '5px', borderRadius: '15px', borderColor: '#3f51b5' }}
              onClick={() => handlePriceClick('2000')}
            >
              $2,000
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={{ margin: '5px', borderRadius: '15px', borderColor: '#3f51b5' }}
              onClick={() => handlePriceClick('2500')}
            >
              $2,500
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={{ margin: '5px', borderRadius: '15px', borderColor: '#3f51b5' }}
              onClick={() => handlePriceClick('150000')}
            >
              $150,000
            </Button>
          </Box>
        </List>
        <Box
          display="flex"
          justifyContent="space-between"
          p={1}
          bgcolor="#f7f7f7"
          borderTop="1px solid #e0e0e0"
        >
          <Button onClick={clearFilters} size="small" variant="outlined">Clear</Button>
          <Button onClick={handlePopoverClose} size="small" variant="contained" color="primary">Done</Button>
        </Box>
      </Popover>
    </div>
  );
}

export default RentalPriceSelectPopover;
