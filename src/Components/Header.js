import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return (
    <header id="top">
      <div>
        <p id="menuBtn"><span></span><span></span><span></span></p>
        <h1>
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="모찌타운" />
          </a>
        </h1>
        <nav>
          <h2 className="hide">메인네비게이션</h2>
          <ul id="gnb">
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">MAIN</a></li>
            <li><Link to="/">SHOP</Link></li>
            <li><Link to="/review">REVIEW</Link></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
          <h2 className="hide">검색창</h2>
          <div id="search">
            <input type="text" />
            <p className="btn"></p>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header