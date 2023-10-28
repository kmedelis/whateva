"use client"

import { Typography, Grid } from '@mui/material';

interface AboutDetailsProps {
  advertisement: {
    description?: string;
  };
  sectionName: string;
  sectionId: string;
}

const AboutDetails: React.FC<AboutDetailsProps> = ({ advertisement, sectionName, sectionId }) => {
    return (
    <>
    <div id={sectionId}>
    <Typography variant="h4">{sectionName}</Typography>
    <Typography>{advertisement?.description}</Typography>
    </div>
    </>
    )
}

export default AboutDetails