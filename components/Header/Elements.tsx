import React, { FC } from "react";
import NavbarButton from "./navbarbuttons";
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';

const Elements: FC = () => {
  return (
    <div className="lg:flex flex-row pr-5 lg:gap-4">

      <div className="pl-6 lg:pl-0">
        <div className="text-white flex flex-row gap-2 lg:gap-0">
        <HomeIcon/>
        <NavbarButton text={"Home"} target={"Home"} ></NavbarButton>
        </div>
      </div>
      <div className="pt-5 pl-6  lg:pt-0 pl-0">
        <div className="text-white flex flex-row ">
        <InfoIcon/>
        <NavbarButton text={"About"} target={"about"} />
        </div>
      </div>
      <div className="pt-5 pl-6  lg:pt-0 pl-0">
        <div className="text-white flex flex-row ">
        <MiscellaneousServicesIcon />
        <NavbarButton text={"Services"} target={"Our Services"} />
        </div>
      </div>
      <div className="pt-5 pl-6  lg:pt-0 pl-0">
        <div className="text-white flex flex-row ">
        <PrecisionManufacturingIcon/>
        <NavbarButton text={"Capabilities"} target={"Capabilities"} />
        </div>
      </div>
      <div className="pt-5 pl-6  lg:pt-0 pl-0">
        <div className="text-white flex flex-row ">
          <ConnectWithoutContactIcon/>
        <NavbarButton text={"Get in Touch"} target={"Touch"} />
        </div>
      </div>
    </div>
  );
};

export default Elements;
