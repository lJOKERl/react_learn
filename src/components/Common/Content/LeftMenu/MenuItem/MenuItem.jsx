import React from "react";
import './style.css';

const MenuItem = (props) => {
  return (
    <li className="menu_item">
      <a href={props.url}>{props.text}</a>
    </li>
  );
}

export default MenuItem;