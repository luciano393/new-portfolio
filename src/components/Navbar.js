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
        {showBtn
        ? (<Link to="/" onClick={handleButton} className="brand">
              <FontAwesomeIcon icon={faLevelUpAlt} className="arrow" />
              <p>Back to blog</p>
            </Link>)
        : (<Link className="brand" to="/about" onClick={handleButton}>
            <IKImage
              path="/mifotote_jAh8HxRCr.png?updatedAt=1637179271417"
              transformation={[
            {
              height: "400",
              width: "400",
            },
            ]}
            />
            <p>Luciano Ibarra</p>
          </Link>)
        }

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