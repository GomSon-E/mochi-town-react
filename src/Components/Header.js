import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
      <ul className="nav">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/review">Review</Link></li>
      </ul>
    </header>
  )
}

export default Header