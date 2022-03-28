
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAthorizer } from '../../context/AuthorizerContext';
import "./Navbar.css";
function Navbar (){

    const { authState , authDispatch } = useAthorizer();
    const navigator = useNavigate();
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

            {authState.loginStatus? 
                    <span className="nav-login-link"> 
                        <button className="nav-login-btn" onClick={()=> authDispatch({ type:'LOGOUT' })} >Log out</button>
                    </span> :
                    <Link className="nav-login-link" to="/login">
                        <button className="nav-login-btn">Login</button>
                    </Link>
            }
                        
            <ul className="nav-list">
                <li className="nav-list-item">
                    <div className="nav-list-link icon-badge pos-rel"  style={{ cursor:"pointer" }} ><i
                            className="fal fa-heart nav-link-icon"></i>
                        <div className="badge-number flex-center header-badge-color badge-on-icon pos-abt">3</div>
                    </div>
                </li>
                <li className="nav-list-item">
                    <div className="nav-list-link icon-badge pos-rel"  style={{ cursor:"pointer" }} >
                        <i className="fal fa-shopping-cart nav-link-icon" onClick={()=>authState.loginStatus?navigator("/cart"):navigator("/login") }  ></i>
                        {
                            authState.loginStatus&&<div className= {`badge-number flex-center header-badge-color badge-on-icon pos-abt ${  (authState.loginStatus && authState.cart.length<1) && "hide" }`} >
                                {authState.cart.length}
                            </div>
                        }
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    </>

}

export default Navbar;