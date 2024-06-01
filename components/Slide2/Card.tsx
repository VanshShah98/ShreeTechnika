// components/FeatureCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    //reduse the width and increase the height of the card 
    <Card className="rounded-xl border border-gray-200 shadow-md p-4 lg:h-80 lg:w-72">
      <CardContent>
        <Box className="flex justify-left mb-2">
          {icon}
        </Box>
        <Typography variant="h6" component="div" className="font-semibold text-left pt-28">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="text-left mt-2 ">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
