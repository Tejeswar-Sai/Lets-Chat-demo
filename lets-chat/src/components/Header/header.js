import React from "react";
import "./style.css";
import viratkohli from '/home/c/Documents/Projects/Lets-Chat-demo/lets-chat/src/images/viratkohli.jpg'
import { useSelector, useDispatch } from "react-redux";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <div className="logo">Lets Chat</div>
        <div className="search">
          <input
            id="searchInput"
            type='text'
            placeholder="Search for colleagues/groups"
          />
        </div>
        <div className="user">
            <div className="userName">Virat Kohli</div>
            <div className="userImage">
                <img src={viratkohli} />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
