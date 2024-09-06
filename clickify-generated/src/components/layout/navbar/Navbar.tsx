import React, { FC } from "react";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  alpha,
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Link,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { LayoutDispositions, WebsiteSupportStatuses } from "@clickify/clickify-common";
import { useNavbar } from "@/hooks";

// TODO use contexts
// import { useWebsiteSettings } from "@/contexts/websiteSettings";
import { NavbarMode } from "@/router";
import { TypographyVariants } from "@/theme/typings/TypographyVariants";
import { IkeaLogo, IkeaBanner } from "@/assets";
import { useWebsiteSettings } from "../../../contexts/websiteSettings";

const MENUS = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/products" },
  { title: "Support", link: "/support" },
  { title: "About us", link: "/about-us" },
  { title: "Back-Office", link: "" },
];
const SIDEMENUS = [
  { title: "All", link: "/products" },
  { title: "Bathroom products", link: "/products" },
  { title: "Beds & mattresses", link: "/products" },
  { title: "Baby & children", link: "/products" },
  { title: "Decoration", link: "/products" },
  { title: "Foods & beverages", link: "/products" },
];
const MENU_ID = "primary-search-account-menu";
const MOBILE_MENU_ID = "primary-search-account-menu-mobile";

const TODO_SEARCH_BAR = false;

const Search = styled("div")(() => ({
  borderRadius: 9,
  color: alpha("#EFEFEF", 0.53),
  backgroundColor: alpha("#EFEFEF", 0.09),
  "&:hover": {
    backgroundColor: alpha("#EFEFEF", 0.15),
  },
  height: 28,
  width: "28%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: "1em",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Navbar: FC<{ navbarMode: NavbarMode }> = ({ navbarMode }) => {
  const theme = useTheme();
  const { websiteSettings } = useWebsiteSettings();

  const {
    handleProfileMenuOpen,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    handleMenuClose,
    isMenuOpen,
    isMobileMenuOpen,
    anchorEl,
    mobileMoreAnchorEl,
  } = useNavbar();

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={MOBILE_MENU_ID}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {/* TODO DO MOBILE NAVBAR CORRECTLY */}
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          onClick={() => {
            window.location.href = "/cart";
          }}
        >
          <Badge badgeContent={4} color="error">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#0058AB", font: "status-bar" }} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={() => {
            window.location.href = "/cart";
          }}
        >
          <Badge badgeContent={17} color="error">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#0058AB", font: "status-bar" }} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FontAwesomeIcon icon={faUser} style={{ font: "status-bar" }} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={MENU_ID}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          window.location.href = "/account";
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          window.location.href = "/account";
        }}
      >
        My account
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar
        style={{
          background: theme.palette.primary.main,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <img src={websiteSettings.fullLogoPath} style={{ width: 100, marginRight: "14%" }} aria-label="open drawer" />
          {TODO_SEARCH_BAR ? (
            <Search style={{ marginLeft: "3%" }}>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          ) : undefined}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
            <div style={{ display: "flex", gap: 37, marginRight: 50 }}>
              {MENUS.map((menu, index) => {
                if (websiteSettings.support.status === WebsiteSupportStatuses.LOCKED && menu.title === "Support") {
                  return null;
                }

                return (
                  <Typography key={index} style={{ color: "#EFEFEF", fontWeight: index === 0 ? 600 : 400 }}>
                    <Link variant={TypographyVariants.WHITE} href={menu.link}>
                      {menu.title}
                    </Link>
                  </Typography>
                );
              })}
            </div>
            <IconButton
              onClick={() => {
                window.location.href = "/cart";
              }}
              style={{ backgroundColor: "#EFEFEF", height: 28, width: 28 }}
              aria-label="show 4 new mails"
            >
              <Badge badgeContent={0} color="error">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{
                    color: alpha(theme.palette.primary.main, 0.9),
                    font: "status-bar",
                    paddingTop: 1,
                    paddingRight: 1,
                  }}
                />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={MENU_ID}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <FontAwesomeIcon icon={faUser} style={{ font: "status-bar" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={MOBILE_MENU_ID}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <FontAwesomeIcon icon={faUser} style={{ font: "status-bar" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {navbarMode === NavbarMode.BIG_PICTURE ? (
        <div
          style={{
            marginTop: "44px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            style={{ backgroundColor: theme.palette.primary.main, width: "10%", padding: "2rem", minWidth: "225px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 37, marginRight: 50 }}>
              {SIDEMENUS.map((menu, index) => (
                <Typography key={index} style={{ color: "#EFEFEF", fontWeight: index === 0 ? 600 : 400 }}>
                  <Link variant={TypographyVariants.WHITE} href={menu.link}>
                    {menu.title}
                  </Link>
                </Typography>
              ))}
            </div>
          </Box>
          <Box
            style={{
              backgroundColor: alpha(theme.palette.primary.main, 0.9),
              flex: "1 auto",
              display: "flex",
              flexDirection:
                websiteSettings.landingPage.layout === LayoutDispositions.LEFT
                  ? "row"
                  : websiteSettings.landingPage.layout === LayoutDispositions.RIGHT
                  ? "row-reverse"
                  : "column-reverse",
              padding: "2rem 1rem 1rem 1rem",
              alignItems: websiteSettings.landingPage.layout === LayoutDispositions.CENTERED ? "center" : "stretch",
            }}
          >
            <img
              src={websiteSettings.landingPage.imagePath}
              style={{ width: "60%", objectFit: "contain", padding: "1rem", objectPosition: "top" }}
            />
            <Box
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                objectFit: "contain",
                padding: "1rem",
                alignItems: "center",
              }}
            >
              <img src={websiteSettings.fullLogoPath} style={{ width: "50%", minWidth: "150px" }} />
              <Typography style={{ marginTop: "1rem", color: "#EFEFEF", textAlign: "justify" }}>
                {websiteSettings.landingPage.text}
              </Typography>
            </Box>
          </Box>
        </div>
      ) : null}
      {navbarMode === NavbarMode.BIG_PICTURE ? <Box></Box> : null}
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};
