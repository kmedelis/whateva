"use client";
import {
  Box,
  Button,
  List,
  ListItem,
  Popover,
  Slider,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function YearSelectPopover({
  setFilterMinimumYear,
  setFilterMaximumYear,
  minYear,
  maxYear,
  setIsPopoverOpen,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [year, setYear] = useState<number[]>([minYear, maxYear]);
  const [selectedMin, setSelectedMin] = useState(minYear);
  const [selectedMax, setSelectedMax] = useState(maxYear);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true); // Open the backdrop
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setIsPopoverOpen(false); // Close the backdrop
  };

  const handleMinimumInputChange = (event) => {
    console.log(event.target.value);
    setSelectedMin(event.target.value);
    setYear((prevYear) => [event.target.value, prevYear[1]]);
    setFilterMinimumYear(event.target.value || "0");
  };

  const handleMaximumInputChange = (event) => {
    setSelectedMax(event.target.value);
    setYear((prevYear) => [prevYear[0], event.target.value]);
    setFilterMaximumYear(event.target.value || "999999999");
  };

  const handleSliderValue = (event: Event, newValue: number | number[]) => {
    setFilterMinimumYear(newValue[0]);
    setSelectedMin(newValue[0]);
    setFilterMaximumYear(newValue[1]);
    setSelectedMax(newValue[1]);
    setYear(newValue as number[]);
  };

  const clearFilters = () => {
    setSelectedMin(minYear);
    setSelectedMax(maxYear);
    setFilterMinimumYear(minYear);
    setFilterMaximumYear(maxYear);
    setYear([minYear, maxYear]);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlePopoverOpen}>
        Year
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              width: "100%", 
            },
          },
        }}
      >
        <List>
          <ListItem>
            <TextField
              value={selectedMin}
              size="small"
              type="number"
              inputProps={{ pattern: "\\d*" }}
              onChange={handleMinimumInputChange}
              placeholder="Minimum year"
            />
            <div>-</div>
            <TextField
              value={selectedMax}
              size="small"
              type="number"
              inputProps={{ pattern: "\\d*" }}
              onChange={handleMaximumInputChange}
              placeholder="Maximum year"
            />
          </ListItem>
          <ListItem>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={year}
              onChange={handleSliderValue}
              min={minYear}
              max={maxYear}
            />
          </ListItem>
        </List>
        <Box
          display="flex"
          justifyContent="space-between"
          p={1}
          bgcolor="#f7f7f7"
          borderTop="1px solid #e0e0e0"
        >
          <Button onClick={clearFilters} size="small" variant="outlined">
            Clear
          </Button>
          <Button
            onClick={handlePopoverClose}
            size="small"
            variant="contained"
            color="primary"
          >
            Done
          </Button>
        </Box>
      </Popover>
    </div>
  );
}
