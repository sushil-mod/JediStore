
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
function Navbar (){

    return<>
        <nav className="navbar flex-space-btw wd-100 bx-shadow navbar-position">
            <Link to="/">
                <div className="nav-logo"><i className="fas fa-jedi nav-logo-icon"></i> <span className="nav-logo-txt">Jedi Store</span>
                </div>
            </Link>
        <div className="navbar-search">
            <button className="search-btn"><i className="fas fa-search"></i></button>
            <input className="search-input" type="text" name="search" placeholder="Search Here...." />
        </div>
        <div className="navbar-links flex-center" >
            <Link className="nav-login-link" to="./screens/html/login.html">
                <button className="nav-login-btn">Login</button>
            </Link>
            <ul className="nav-list">
                <li className="nav-list-item">
                    <Link className="nav-list-link icon-badge pos-rel" to="./screens/html/wishlist.html"><i
                            className="fal fa-heart nav-link-icon"></i>
                        <div className="badge-number flex-center header-badge-color badge-on-icon pos-abt">3</div>
                    </Link>
                </li>
                <li className="nav-list-item">
                    <Link className="nav-list-link icon-badge pos-rel" to="./screens/html/cart.html"><i
                            className="fal fa-shopping-cart nav-link-icon"></i>
                        <div className="badge-number flex-center header-badge-color badge-on-icon pos-abt">3</div>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>

}

export default Navbar;