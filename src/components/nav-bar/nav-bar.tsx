import React, { useContext, useEffect, useRef, useState } from "react";
import "./nav-bar.less";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeSelectorContext } from "../../utils/contexts/theme-selector";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { themeName, toggleTheme } = useContext(ThemeSelectorContext);
  const [isBurgerNavActive, setIsBurgerNavActive] = useState(false);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-bar-links li");

    navLinks.forEach((link, index: number) => {
      // @ts-ignore
      if (link.style.animation) {
        // @ts-ignore
        link.style.animation = "";
      } else {
        // @ts-ignore
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 6 + 0.5
        }s`;
      }
    });

    const mouseScrollEventListener = () => {
      if (isBurgerNavActive) {
        setIsBurgerNavActive(false);
      }
    };

    document.addEventListener("scroll", mouseScrollEventListener);

    return () =>
      document.removeEventListener("scroll", mouseScrollEventListener);
  }, [isBurgerNavActive]);

  return (
    <nav id="nav-bar" className="nav-bar">
      <div className="nav-bar-logo"></div>
      <div className="nav-bar-content">
        <ul
          className={`nav-bar-links ${isBurgerNavActive ? "nav-active" : ""}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="/paintings">Paintings</Link>
          </li>
        </ul>
        <div
          className={`nav-bar-burger ${isBurgerNavActive ? "toggle" : ""}`}
          onClick={() => setIsBurgerNavActive((prevState) => !prevState)}
        >
          <div className="nav-bar-burger-line-1"></div>
          <div className="nav-bar-burger-line-2"></div>
          <div className="nav-bar-burger-line-3"></div>
        </div>
      </div>
      <IconButton className="theme-toggle-button" onClick={toggleTheme}>
        {themeName === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </nav>
  );
};

export default NavBar;
