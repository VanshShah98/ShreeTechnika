import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HandymanIcon from '@mui/icons-material/Handyman';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 mx-4">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const CARDS = [
  {
    icon: <SettingsIcon fontSize="large" />,
    title: 'Precision Machining',
    description:
      'Our state-of-the-art CNC machines and skilled technicians deliver precise, high-quality parts and components.',
  },
  {
    icon: <BuildIcon fontSize="large" />,
    title: 'Fabrication',
    description:
      'Our skilled fabricators use the latest techniques and equipment to create custom metal parts and structures.',
  },
  {
    icon: <VisibilityIcon fontSize="large" />,
    title: 'Inspection Services',
    description:
      'We offer reliable and efficient inspection services services to ensure your parts and products are working just fine.',
  },
  {
    icon: <HandymanIcon fontSize="large" />,
    title: 'Inspection & QA/QC at Workshops and Construction Sites',
    description: 'Implement comprehensive QA/QC protocols for workshop and construction sites.',
  },
  {
    icon: <TaskOutlinedIcon fontSize="large" />,
    title: 'Preparation of Quality Technical Documents',
    description: 'Develop meticulous technical documentation including ITP, QAP, NDT procedures, etc.',
  },
  {
    icon: <SupervisorAccountOutlinedIcon fontSize="large" />,
    title: 'Vendor Evaluation and Assessment',
    description: 'Assess vendors to ensure capability, reliability, and performance.',
  },
  {
    icon: <EngineeringIcon fontSize="large" />,
    title: 'Monitoring of Production and Welding Process',
    description: 'Supervise production and welding processes to maintain quality standards.',
  },

  {
    icon: <HourglassTopOutlinedIcon fontSize="large" />,
    title: 'Expediting of Project Equipment/Goods',
    description: 'Expedite procurement and delivery of project equipment and goods.',
  },
              
  
];

const REPEATED_CARDS = [...CARDS, ...CARDS, ...CARDS, ...CARDS];

export const InfiniteSlider = () => {
  return (
    <div className="relative z-1 m-auto w-5/6 lg:w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:scale-x-[-1]  after:content-['']">
      <div className="lg:h-96 animate-infinite-Cardslider flex w-[calc(350px*28)]">
        {REPEATED_CARDS.map((card, index) => (
          <div className="slide flex w-[350px] items-center justify-center" key={`card-${index}`}>
            <FeatureCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};