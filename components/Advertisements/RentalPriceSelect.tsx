import React from 'react';
import { Select, MenuItem } from '@mui/material';

function RentalPriceSelect() {
  const [price, setPrice] = React.useState('');

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Select
      value={price}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="" disabled>
        Min Rent
      </MenuItem>
      <MenuItem value={2000}>$2,000</MenuItem>
      <MenuItem value={2500}>$2,500</MenuItem>
      <MenuItem value={3000}>$3,000</MenuItem>
    </Select>
  );
}

export default RentalPriceSelect;
