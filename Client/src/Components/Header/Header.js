import * as React from "react";
import { useState } from "react";
import "./Header.scss";

const Header = ({ page }) => {
  return (
    <div className="header2">
      <h2>{page}</h2>
      <h2>Welcome friend :)</h2>
    </div>
  );
};

export default Header;
