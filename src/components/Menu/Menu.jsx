import React, { useState, useRef } from "react";
import "../Menu/Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  const [change, setChange] = useState(true);
  const [menu, setMenu] = useState("Menu");



  return (
    <div className="Menu">
      <Link style={{textDecoration:"none"}} to="/welcome">
        <h1 >Menu</h1>
      </Link>
    </div>
  );
}

export default Menu;
