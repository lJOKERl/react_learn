import React from "react";
import "./style.css";
import MenuItem from "./MenuItem/MenuItem";
// import { NavLink, BrowserRouter } from "react-router-dom";

const LeftMenu = () => {
  return (
    <nav className="left_menu">
      <ul>
        <MenuItem url="/home" text="Моя страница" />
        <MenuItem url="/news" text="Новости" />
        <MenuItem url="/messages" text="Сообщения" />
        <MenuItem url="/friends" text="Друзья" />
      </ul>
    </nav>
  );
};

export default LeftMenu;
