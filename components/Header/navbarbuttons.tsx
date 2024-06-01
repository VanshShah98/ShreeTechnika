// components/NavbarButton.tsx
import React, { FC, ReactNode } from 'react';

interface NavbarButtonProps {
  text: string;
  target: string;
  onClick?: () => void;
  children?: ReactNode;
}

const NavbarButton: FC<NavbarButtonProps> = ({ text, target, onClick, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(target);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button className="text-white flex flex-col lg:pl-5 hover:underline" onClick={onClick ? onClick : scrollToSection}>
      <span>{text}</span>
      {children}
    </button>
  );
};

export default NavbarButton;
