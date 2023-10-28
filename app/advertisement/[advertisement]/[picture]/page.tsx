"use client"
import image1 from '@/images/image1.jpeg';
import image2 from '@/images/image2.jpeg';
import image3 from '@/images/image3.jpeg';
import image4 from '@/images/image4.jpeg';
import image5 from '@/images/image5.jpeg';
import image6 from '@/images/image6.jpeg';
import image7 from '@/images/image7.jpeg';
import { NavigateBefore, NavigateNext, Close } from '@mui/icons-material';
import { Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { picture: number } }) {
  const imageUrls = [image1, image2, image3, image4, image5, image6, image7];
  const [currentPictureIndex, setCurrentPictureIndex] = useState(Number(params.picture));
  const totalPhotos = imageUrls.length;
  const currentImage = imageUrls[currentPictureIndex];
  const router = useRouter();

  const navigateBefore = () => {
    setCurrentPictureIndex(prevIndex => prevIndex === 0 ? totalPhotos - 1 : prevIndex - 1);
  }

  const navigateNext = () => {
    setCurrentPictureIndex(prevIndex => prevIndex === totalPhotos - 1 ? 0 : prevIndex + 1);
  }

  const close = () => {
    router.back()
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" width="100%">
      <Box display="flex" alignItems="center" justifyContent="center" width="100%">
        <Box position="absolute" top="5px" right="5px">
          <Button onClick={close}>
            <Close fontSize='large' color='action' />
          </Button>
        </Box>

        <Box position="absolute" left="10px">
          <Button onClick={navigateBefore}>
            <NavigateBefore fontSize='large' color='action' />
          </Button>
        </Box>

        <img
          src={currentImage.src}
          style={currentImage.height > currentImage.width ? { width: '430px', height: '654px' } : { width: '942px', height: '654px' }}
        />

        <Box position="absolute" right="10px">
          <Button onClick={navigateNext}>
            <NavigateNext fontSize='large' color='action' />
          </Button>
        </Box>
      </Box>

      <Typography position="absolute" bottom="5px" left="20px" fontSize={20}>
        {currentPictureIndex + 1} / {totalPhotos}
      </Typography>
    </Box>
  )
}
