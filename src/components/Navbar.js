import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedPage, setSelectedPage] = useState("home");

  const pages = [
    { name: "Home", icon: "🏠" }, // House symbol
    { name: "Workouts", icon: "🏋️‍♂️" }, // Weight symbol
    { name: "Nutrition", icon: "🍎" }, // Apple symbol
    { name: "Settings", icon: "⚙️" }, // Gear symbol
  ];

  const handleMenuToggle = () => {
    setActiveMenu(!activeMenu);
  };

  const handlePageSelect = (page) => {
    setSelectedPage(page);
    setActiveMenu(false); // Close the dropdown menu
  };

  return (
    <div className="navbar-container">
      <div
        className={`circle-button ${activeMenu ? "active" : ""}`}
        onClick={handleMenuToggle}
      >
        {pages.find((p) => p.name.toLowerCase() === selectedPage).icon}
      </div>
      {activeMenu && (
        <div className="dropdown-menu">
          {pages.map((page) => (
            <div
              key={page.name}
              className="dropdown-item"
              onClick={() => handlePageSelect(page.name.toLowerCase())}
            >
              <span className="icon">{page.icon}</span>
              <span className="page-name">{page.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
