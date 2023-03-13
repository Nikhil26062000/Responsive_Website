import React, { useState } from "react";
import "../index.css";
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {

  
  return (
    <>
      <div className="Header">
        <div className="title">
          <h1>
            <span>K</span>umar
          </h1>
          <h1>
            <span>M</span>edicine
          </h1>
        </div>

        <div className="hamburger"  onClick={()=>  {props.fun()}}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
