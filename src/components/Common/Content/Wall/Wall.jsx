import React from "react";
import './style.css';
import Friends from "../../../Pages/Friends/Friends";
import Messages from "../../../Pages/Messages/Messages";
import {  Route } from "react-router-dom";

const Wall = () => {
  return (
      <div className="wall">
        <Route path="/messages" component={Messages} />
        <Route path="/friends" component={Friends} />
      </div>
  );
}

export default Wall;