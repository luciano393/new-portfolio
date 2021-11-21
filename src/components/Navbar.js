import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../hooks/useTheme";
import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [checked, setChecked, toggleThemeChange] = useTheme();
  const [showBtn, setShowBtn ] = useState(false)
  
  const handleButton = () => {
    setShowBtn(!showBtn);
  }

  return (
    <header className="Navbar-wrapper">
      <div className="navbar">
        <nav>
          <Link to="/" className="item">Proyectos</Link>
          <Link to="/about" className="item">Sobre mi</Link>
        </nav>

        {checked ? (
          <FontAwesomeIcon
            icon={faSun}
            className="sun"
            onClick={() => toggleThemeChange()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="moon"
            onClick={() => toggleThemeChange()}
          />
        )}
      </div>
    </header>
  );
};