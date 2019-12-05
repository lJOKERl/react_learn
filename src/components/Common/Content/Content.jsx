import React from "react";
import './Content.css';
import LeftMenu from "./LeftMenu/LeftMenu";
import Wall from "./Wall/Wall";
import RightMenu from "./RightMenu/RightMenu";

const Content = () => {
  return (
    <div className="main_content">
      <LeftMenu />
      <Wall />
      <RightMenu />
    </div>
  )
}

export default Content;