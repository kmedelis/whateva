import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Popover,
} from "@mui/material";
import { useState } from "react";

interface HouseTypeSelectPopoverProps {
  setIsPopoverOpen: (isOpen: boolean) => void;
  setFilterHouseType: (filter: FilterHouseType) => void;
  filterHouseType: FilterHouseType;
}

interface FilterHouseType {
  apartments: boolean;
  duplex: boolean;
  houses: boolean;
  other: boolean;
}

const HouseTypeSelectPopover: React.FC<HouseTypeSelectPopoverProps> = ({
  setIsPopoverOpen,
  setFilterHouseType,
  filterHouseType,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setIsPopoverOpen(false);
  };

  const handleChange = (event) => {
    setFilterHouseType({
      ...filterHouseType,
      [event.target.name]: event.target.checked,
    });
  };

  const clearFilters = () => {
    setFilterHouseType({
      apartments: false,
      houses: false,
      duplex: false,
      other: false,
    });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlePopoverOpen}>
        House Type
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
        <List dense>
          <ListItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterHouseType.apartments}
                  onChange={handleChange}
                  name="apartments"
                />
              }
              label="Apartments"
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterHouseType.houses}
                  onChange={handleChange}
                  name="houses"
                />
              }
              label="Houses"
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterHouseType.duplex}
                  onChange={handleChange}
                  name="duplex"
                />
              }
              label="Duplex"
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterHouseType.other}
                  onChange={handleChange}
                  name="other"
                />
              }
              label="Other"
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
};

export default HouseTypeSelectPopover;
