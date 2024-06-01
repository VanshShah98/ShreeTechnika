import { FC } from "react";
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import './animation.css'; // Import the CSS file

const Text: FC = () => {
  return (
    <>
      <Box textAlign="left" py={8} className="text-xl">
        <Typography
          gutterBottom
          className="font-tuviraj font-bold text-black text-l md:text-xl lg:text-2xl xl:text-3xl animate-fade-in"
        >
          Precision Machining and Fabrication
        </Typography>
        <Typography
          variant="body1"
          paragraph
          className="text-stone-500 pt-5 text-sm md:text-base lg:text-lg xl:text-xl animate-fade-in"
        >
          Shree Technika specializes in delivering high-quality precision machining and fabrication services to industries across the globe.
        </Typography>
      </Box>
    </>
  );
};

export default Text;