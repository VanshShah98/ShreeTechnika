import React from 'react';
import Text from './text';
import QuiltedImageList from './ImageList';
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';

export default function Slide1() {
  const handlePDFButtonClick = () => {
    window.open('Shree_Technika.pdf', '_blank'); // Open PDF in new tab
  };
  const handleCertificateButtonClick = () => {
    const certificateSlide = document.getElementById('CertificateSlide');
    if (certificateSlide) {
      certificateSlide.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Responsive made */}
      <section id="Home">
        <div className='bg-white flex flex-col lg:flex-row h-auto lg:h-screen'>
          <div className='p-8 rounded-lg shadow-md lg:w-[50%] h-[300px] lg:h-auto p-4 lg:pl-24 lg:pt-6'>
            <QuiltedImageList />
          </div>
          <div className='flex flex-col'>
            <div className='w-full lg:w-[75%] lg:pl-36 pl-5 lg:pt-52'>
              <Text />
            </div>
            <div className='lg:pl-36 pl-4 pb-3 flex flex-row gap-4'>
              <Button size='large' variant="contained" color='primary' startIcon={<InfoIcon />} onClick={handlePDFButtonClick}>
                Know More
              </Button>
              <Button size='large' variant="contained" color='primary' startIcon={<ArticleIcon />} onClick={handleCertificateButtonClick}>
                Certificates
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}