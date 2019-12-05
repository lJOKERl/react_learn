import React from "react";
import './style.css';
import Friends from "../../../Pages/Friends/Friends";
import Messages from "../../../Pages/Messages/Messages";
import { BrowserRouter, Route } from "react-router-dom";

const Wall = () => {
  return (
    <BrowserRouter>
      <div className="wall">
        <Route path="/messages" component={Messages} />
        <Route path="/friends" component={Friends} />
      </div>
    </BrowserRouter>
  );
}

export default Wall;