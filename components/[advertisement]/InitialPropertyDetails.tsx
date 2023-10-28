"use client"

import { Typography, Grid } from '@mui/material';

interface PropertyDetailsProps {
  advertisement: {
    city?: string;
    neighborhood?: string;
    street?: string;
    houseNumber?: string;
    plotArea?: number;
    roomCount?: number;
    buildYear?: number;
    price?: number;
  };
}

const InitialPropertyDetails: React.FC<PropertyDetailsProps> = ({ advertisement }) => {
  const currentUlr = window.location.href;

  return (
    <>
      <Typography variant='textSecondary'>{advertisement?.city} / {advertisement?.neighborhood}</Typography>
      <Typography variant="h4">{advertisement?.street} {advertisement?.houseNumber}</Typography>
      <Grid container spacing={0} paddingTop={1}>
        <Grid item xs={2}>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
            <Typography component="span">{advertisement?.plotArea} m² plot</Typography>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
            <Typography component="span">{advertisement?.roomCount} rooms</Typography>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
            <Typography component="span">{advertisement?.buildYear} year</Typography>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" paddingTop={1}>
        €{advertisement?.price}
      </Typography>
    </>
  );
}

export default InitialPropertyDetails;
