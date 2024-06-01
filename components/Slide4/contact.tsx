import React from 'react';// Make sure to replace 'path-to-your-image.jpg' with the actual path to your image
import { InfiniteSlider } from './infiniteloop';
import { Typography } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <>
      <section> 
        <Typography className='flex flex-col text-blue-950 text-3xl lg:text-5xl font-medium font-serif pl-8 lg:pl-10 pt-14 pt-16 pb-8 '>Esteemed Customers</Typography>
          <div className=''>
            <InfiniteSlider/>
          </div>
        
      </section>
    </>
  );
};

export default Contact;
