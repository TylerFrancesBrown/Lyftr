import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Logo from "./logo.svg";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Navbar />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="Logo" style={{ width: "150px", height: "150px" }} />
      </div>
    </div>
  );
};

export default App;
