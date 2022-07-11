import React from "react";
import Nav from "./Nav";
import "./header.css";

function Header(){
    return (
      <div className="header">
        <Nav />
        <div className="header-main">
          <div class="paper">
            <div class="pin">
              <div class="shadow"></div>
              <div class="metal"></div>
              <div class="bottom-circle"></div>
            </div>
            <p><span className="header-title">OnlyFangs</span><br/>The one-stop-shop<br/> for all your exotic pet needs!</p>
          </div>
        </div>
      </div>
    );
}
export default Header;