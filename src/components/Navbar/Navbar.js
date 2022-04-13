import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useEffect } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const pages = ["about", "project", "skills", "contact"];

const Navbar = ({ changeBg, handleDarkMode, prefersDarkMode, theme }) => {
  // Checking condition scrool trigger
  const trigger = useScrollTrigger();
  // ini inilaisasi nampilin menu
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      color={trigger ? "default" : "transparent"}
      elevation={trigger ? 4 : 0}
      style={{
        transition: "all 0.5s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            CandraBrata
          </Typography>

          {/* Ini buat mobile */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a
                      href={`#${page}`}
                      style={{
                        textDecoration: "none",
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    >
                      {page}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo Mobile */}
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            CandraBrata
          </Typography>

          {/* Ini menu item desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <a
                key={page}
                href={`#${page}`}
                style={{
                  textDecoration: "none",
                  color: theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                >
                  {page}
                </Button>
              </a>
            ))}
          </Box>

          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
          <Switch
            onChange={handleDarkMode}
            value={theme}
            checked={theme.palette.mode === "dark" ? true : false}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
