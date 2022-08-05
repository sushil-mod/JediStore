import React from 'react';
import { Link } from 'react-router-dom';

import { BsTwitter,BsInstagram , BsGithub } from 'react-icons/bs';

function Footer(){

    return<div>

        <div className='home-footer flex-center flex-col'>
            <div className='social-link padd-top-sm d-flex gap-sm'>
                
                <a href='https://github.com/sushil-mod' target="_blank" ><div className='avatar-sm avatar-round flex-center footer-avatar' > <BsGithub/> </div> </a>
               
            </div>
            <ul className='padd-top-sm '>
              <li className="list-inline cursor-pointer"><Link to="/"></Link>Home</li>
              <li className="list-inline cursor-pointer"><Link to="/products"></Link>Products</li>
              <li className="list-inline cursor-pointer"><Link to="/"></Link>About</li>
              <li className="list-inline cursor-pointer"><Link to="/"></Link>Terms</li>
            </ul>
            <p className='padd-top-sm"'>
            Jedi Store © 2022
            </p>
        </div>


    </div>
}

export default Footer;