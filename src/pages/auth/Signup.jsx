import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAthorizer } from '../../context/AuthorizerContext';

function Signup () {

    const navigator = useNavigate();

    const { authDispatch } = useAthorizer();

    const signupSubmitHandler = (e)=>{

        e.preventDefault();
        const [ firstName ,lastName , email , password ] = [ e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value ] ;
        console.log(firstName ,lastName , email, password );

        (async () => {

            try {
                const {data , status} = await axios.post("/api/auth/signup",{email,password,firstName,lastName})

                console.log( data , status) ;
                authDispatch({ type:"SIGNUP" , payload : data });  
                navigator("/"); 

            } catch (error) {
                console.log("signup error");
                alert("signup error");
            }


        })();


        

    }

return<>

    <div className="flex-center height-vh-100">

        <form className="form-auth flex-center flex-col bx-shadow" onSubmit={signupSubmitHandler} >

            <div className="form-logo wd-100">
                <Link to="/"> 
                <div className="nav-logo flex-center flex-col">
                    <i className="fas fa-jedi nav-logo-icon"></i>
                    <span className="nav-logo-txt">Jedi Store</span>
                </div>
                </Link>
            </div>

            <div className="form-login">
                <h2 className="padd-top-md">Signup</h2>
            </div>

            <div className="form-input padd-md wd-100">
                <div className="input-container wd-100">

                    <div className="flex-space-btw">
                        <div> 
                            <label className="padd-top-md" htmlFor="">First Name </label>
                            <input type="text" placeholder="Enter First Name" />
                        </div>
                        <div> 
                            <label className="padd-top-md" htmlFor="">Last Name </label>
                            <input type="text" placeholder="Enter Last Name" />
                        </div>
                    </div>

                    

                    <label className="padd-top-md" htmlFor="">Email Id</label>
                    <input type="email" placeholder="Enter Email Id" />

                    <label className="padd-top-md" htmlFor="">Password</label>
                    <input type="password" placeholder="Enter Password" />

                    <label className="padd-top-md" htmlFor="">Confirm Password</label>
                    <input type="password" placeholder="Enter Password" />

                </div>
                <div className="flex-space-btw padd-top-md wd-100">
                    <span><input type="checkbox" /><span className="padd-left-sm">I aceept all terms &
                            conditions</span> </span>

                </div>
            </div>



            <div className="form-btn ">
                <button className="btn login padd-sm" type='submit'>Create New Acoount</button>
            </div>
            <div className="form-next padd-md ">
                <span> <Link to="/login" >Already have an account<i className="fas fa-angle-right padd-left-sm"></i></Link></span>
            </div>

        </form>
    </div>



</>

}

export default Signup ;