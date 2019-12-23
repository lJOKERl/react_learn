import React from "react";
import './Content.css';
import LeftMenu from "./LeftMenu/LeftMenu";
import Wall from "./Wall/Wall";
import RightMenu from "./RightMenu/RightMenu";
import { BrowserRouter } from "react-router-dom";

const Content = () => {
  return (
    <BrowserRouter>
      <div className="main_content">
        <LeftMenu />
        <Wall />
        <RightMenu />
      </div>
    </BrowserRouter>
  );
}

export default Content;