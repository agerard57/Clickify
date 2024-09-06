import { useState, MouseEvent } from "react";

interface UseNavbarProps {
  handleProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  handleMobileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  handleMobileMenuClose: () => void;
  handleMenuClose: () => void;
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  anchorEl: HTMLElement;
  mobileMoreAnchorEl: HTMLElement;
}

export const useNavbar = (): UseNavbarProps => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  return {
    handleProfileMenuOpen,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    handleMenuClose,
    isMenuOpen,
    isMobileMenuOpen,
    anchorEl,
    mobileMoreAnchorEl,
  };
};
