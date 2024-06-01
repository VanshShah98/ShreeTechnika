import { FC } from "react";
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
const Text: FC = () => {
  return (
    <>  
      <Box textAlign="left" py={8} className="text-xl">
        <Typography  gutterBottom className="font-tuviraj font-bold text-white text-l md:text-xl lg:text-2xl xl:text-3xl">Our Capabilities</Typography>
        <Typography variant="body1" paragraph className="text-white pt-5 text-l md:text-base lg:text-lg xl:text-xl pl-3">

        Shree Technika offers a wide range of precision machining and fabrication capabilities to meet the needs of our
        clients.
        </Typography>
        <ul className="list-disc pl-6 text-white text-sm md:text-base lg:text-lg xl:text-xl pl-8">
        <li>CNC Machining</li>
        <li>Welding and Fabrication</li>
        <li>Laser Cutting</li>
        <li>Precision Grinding</li>
      </ul>
      </Box>
    </>
  );
};

export default Text;
