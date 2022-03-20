import React from 'react';
import { Link } from 'react-router-dom';

import { BsTwitter,BsInstagram , BsGithub } from 'react-icons/bs';

function Footer(){

    return<div>

        <div className='home-footer flex-center flex-col'>
            <div className='social-link padd-top-sm'>
                <a href='/'><div className='avatar-sm avatar-round flex-center footer-avatar' ><BsTwitter/></div> </a>
                <a href='/'><div className='avatar-sm avatar-round flex-center footer-avatar' > <BsGithub/> </div> </a>
                <a href='/'><div className='avatar-sm avatar-round flex-center footer-avatar' > <BsInstagram/> </div> </a>
            </div>
            <ul className='padd-top-sm'>
              <li className="list-inline"><Link to="/"></Link>Home</li>
              <li className="list-inline"><Link to="/"></Link>Services</li>
              <li className="list-inline"><Link to="/"></Link>About</li>
              <li className="list-inline"><Link to="/"></Link>Terms</li>
              <li className="list-inline"><Link to="/"></Link>Privacy Policy</li>
            </ul>
            <p className='padd-top-sm"'>
            Jedi Store © 2022
            </p>
        </div>


    </div>
}

export default Footer;