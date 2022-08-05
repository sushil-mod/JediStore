
import React, { useEffect, useState } from 'react';
import { Link, useNavigate , useLocation } from 'react-router-dom';
import { useAthorizer } from '../../context/AuthorizerContext';
import { useProducts } from '../../context/ProductContext';
import "./Navbar.css";


function useDebounce(value ,delay){

    const [ debouncedValue , setDebouncedValue ] = useState(value)

    useEffect(()=>{

        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        },delay);

        return () => {
            clearTimeout(handler);
        };
    },[value ,delay]);
    
    return debouncedValue ;
}



function Navbar (){

    const { authState , authDispatch } = useAthorizer();
    const { filterDispatch } = useProducts();
    const {loginStatus} = authState ;
    const location = useLocation();
    const { pathname } =location;
    const navigate = useNavigate();

    const [ search ,setSearch ] = useState(null);
    console.log(search);

    const debouncedValue = useDebounce(search,1000);
    console.log("debounced", debouncedValue);

    useEffect(()=>{ 
        filterDispatch({type:"SEARCH_FILTER",payload:debouncedValue});
    },[debouncedValue])

    return<>
        <nav className="navbar flex-space-btw wd-100 bx-shadow navbar-position">
            <Link to="/">
                <div className="nav-logo"><i className="fas fa-jedi nav-logo-icon"></i> <span className="nav-logo-txt">Jedi Store</span>
                </div>
            </Link>
        {pathname === "/products" && <div className="navbar-search">
            <button className="search-btn"><i className="fas fa-search"></i></button>
            <input className="search-input" type="text" name="search" placeholder="Search Here...." onChange={(e) => setSearch(e.target.value)} />
        </div> }
        <div className="navbar-links flex-center" >

            {authState.loginStatus? 
                    <span className="nav-login-link"> 
                        <button className="nav-login-btn cursor-pointer" onClick={()=>{localStorage.clear(); authDispatch({ type:'LOGOUT' }) } } >Log out</button>
                    </span> :
                    <span className="nav-login-link">
                        <button className="nav-login-btn cursor-pointer" onClick={()=>navigate("/login",{state:{from:location}})}>Login</button>
                    </span>
            }
                        
            <ul className="nav-list">
                <li className="nav-list-item">
                    <div className="nav-list-link icon-badge pos-rel cursor-pointer">
                        <i className="fal fa-heart nav-link-icon " onClick={()=>navigate("/wishlist")}></i>
                        {
                            loginStatus&&<div className= {`badge-number flex-center header-badge-color badge-on-icon pos-abt ${  (loginStatus && authState.wishlist.length<1) && "hide" }`} >
                                {authState.wishlist.length}
                            </div>
                        }
                    </div>
                </li>
                <li className="nav-list-item">
                    <div className="nav-list-link icon-badge pos-rel cursor-pointer" >
                        <i className="fal fa-shopping-cart nav-link-icon" onClick={()=>navigate("/cart") }  ></i>
                        {
                            loginStatus&&<div className= {`badge-number flex-center header-badge-color badge-on-icon pos-abt ${  (loginStatus && authState.cart.length<1) && "hide" }`} >
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