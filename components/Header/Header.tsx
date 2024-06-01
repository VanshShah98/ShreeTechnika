import React, { FC, useState, useEffect } from "react";
import Image from 'next/image';
import Elements from "./Elements";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    // Adjust the screen width threshold as needed for iPad
    const isIpadScreen = window.innerWidth >= 0 && window.innerWidth <= 1024;
    setMobileMenuOpen(isIpadScreen ? !mobileMenuOpen : false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Listen for window resize to handle dynamic changes
  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);
    return () => {
      window.removeEventListener('resize', closeMobileMenu);
    };
  }, []);

  return (
    <>
      <AppBar position="fixed" className="bg-blue-950 shadow h-20">
        <Toolbar>
          <IconButton className=" lg:hidden md:block" edge="start" color="inherit" onClick={toggleMobileMenu}>
            <MenuIcon/>
          </IconButton>
          <div className="pl-48 lg:pl-8  sm:pl-64">
          <div className="text-white text-2xl font-semibold  md:pl-10 lg:w-36 lg:h-36 pt-3 h-24 w-24 sm:h-32 sm:w-32 ">
            <Image className="w-[150px] md:w-[200px] lg:mt-5 w-[250px]" src={'PNG 1.svg'} alt={'Image'} width='100' height='100' />
          </div>
          </div>

          <div className="hidden md:hidden lg:flex text-xl ml-auto">
            <Elements />
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <Drawer className="lg:hidden" anchor="left" open={mobileMenuOpen} onClose={closeMobileMenu}>
        <div className="bg-blue-950 h-full text-white" onClick={closeMobileMenu}>
          <List>
            <Elements/>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
