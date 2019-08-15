import React from "react"

import "./navBar.css"

const NavBar = ({ headings, selectedIndex }) =>
  <div className={"nav-bar"}>
    <div className={"nav-content"}>
      <div>
        <img src={require("../../assets/images/logo.svg")}/>
      </div>

      <ul>
        {
          headings.map((heading, index) =>
            <li className={selectedIndex === index ? "selected" : "unselected"}>
              {heading}
            </li>)
        }
      </ul>
    </div>
  </div>

export default NavBar
