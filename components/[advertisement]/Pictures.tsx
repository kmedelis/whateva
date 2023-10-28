"use client"

import React, { useState } from 'react';
import { Grid, Link } from '@mui/material';

interface ImageGalleryProps {
  images: { src: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [subImageIndices] = useState([1, 2, 3, 4]);
  const currentUlr = window.location.href;

  const imageContainerStyle = {
    border: '2px solid #e0e0e0',
    overflow: 'hidden',
  };
  return (
    <Grid container>
      <Grid item xs={6}>
        <Link href={`${currentUlr}/0`}>
          <div style={{ ...imageContainerStyle, width: 'calc(100% - 4px)', height: 'calc(600px - 4px)' }}>
            <img
              src={images[mainImageIndex].src}
              alt={`Main ${mainImageIndex}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          {subImageIndices.map((index) => (
            <Grid item xs={6} key={index}>
              <Link href={`${currentUlr}/${index}`}>
                <div style={{ ...imageContainerStyle, width: 'calc(100% - 4px)', height: 'calc(300px - 4px)' }}>
                  <img
                    src={images[index].src}
                    alt={`Image ${index}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageGallery;
