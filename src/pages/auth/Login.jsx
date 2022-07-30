import axios from 'axios';
import React , {useEffect, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAthorizer } from '../../context/AuthorizerContext';

function Login() {
    const [ userInput ,setUserInput ] =useState({email:"",password:""});
    const { authDispatch,authState:{ encodedToken , loginStatus} } = useAthorizer();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("Login",encodedToken,loginStatus);
    console.log("location login",location)
    const loginSubmitHandler=(e,{email,password})=>{
        e.preventDefault();
        (async () => {
            try {
                const { data , status } = await axios.post("/api/auth/login",{email,password});
                if(status === 200){
                    authDispatch({  type:"LOGIN" , payload : data });
                    localStorage.setItem("encodedToken",data.encodedToken);
                    localStorage.setItem("user",JSON.stringify(data.foundUser ) );
                }     
            } catch (error) {
                alert(error+" login failed ");
            }
        })();
    }
    const inputChangeHandler = (e) => { 
        setUserInput({...userInput ,[e.target.name] : e.target.value });
    }
    const guestUser = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
    }
    useEffect(()=>{
        if( encodedToken ){
            navigate( location?.state?.from?.pathname );
        }
    },[ encodedToken ]);

return <>
    <div className="flex-center height-vh-100 position-rel" >
        <img className='img-background' src="./assets/jedibackground.png" alt="backgroundBanner"/>
        <form className="form-auth flex-center flex-col bx-shadow bg-white" onSubmit={(e)=>loginSubmitHandler(e,userInput)}>
            <div className="form-logo wd-100">
                <Link to="/"> 
                    <div className="nav-logo flex-center flex-col">
                        <i className="fas fa-jedi nav-logo-icon"></i>
                        <span className="nav-logo-txt">Jedi Store</span>
                    </div>
                </Link>
            </div>
            <div className="form-login">
                <h2 className="padd-top-md">Login</h2>
            </div>
            <div className="form-input padd-md wd-100">
                <div className="input-container wd-100">
                    <label className="padd-top-md" htmlFor="">Username</label>
                    <input type="email" name='email' value={ userInput.email} placeholder="Enter emailId" onChange={inputChangeHandler} />
                    <label className="padd-top-md" htmlFor="">Password</label>
                    <input type="password" name='password' value={ userInput.password} placeholder="Enter Password" onChange={inputChangeHandler} />
                </div>
                <div className="flex-space-btw padd-top-md wd-100">
                    <span><input type="checkbox" /><span className="padd-left-sm">Remember me</span> </span>
                    <a href="/"> Forgot Password ?</a>
                </div>
            </div>

            <div className="form-btn ">
                <button className="btn login padd-sm margin-btm" type="submit">Login</button>
            </div>
            <div className="form-btn ">
                <button className="nav-login-btn" onClick={(e)=>{loginSubmitHandler(e,guestUser) } }>Login as guest</button>
            </div>
            <div className="form-next padd-md ">
                <span>
                    <Link to="/signup"> Create New Acoount<i className="fas fa-angle-right padd-left-sm"></i></Link></span>
            </div>
        </form>   
    </div>
</>

}

export default Login;