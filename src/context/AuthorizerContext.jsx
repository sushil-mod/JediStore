import axios from 'axios';
import React ,{useReducer ,createContext ,useContext, useEffect }from 'react';
import  authReducerFunc from '../reducer/authReducerFunc';



const AuthorizerContext = createContext();

const AuthorizeProvider = ({children})=>{
    const initialAuthState = {
        loginStatus : localStorage.getItem("encodedToken")?true:false ,
        encodedToken :localStorage.getItem("encodedToken") || "",
        cart:[],
        wishlist:[],
        address:[]
    }

    const [ authState , authDispatch ] = useReducer( authReducerFunc , initialAuthState);
    console.log( "from context" ,authState);

    const getAddress = async (token) => {
        try {
            const res = await axios.get('/api/user/address',{ headers: { authorization: token } });
            console.log(" address ",res);
            authDispatch({ type:"GET_ADDRESS" , payload:res.data.address });
        } catch (error) {
            console.error("address",error);
        }
    }


    useEffect(()=>{
        authState?.encodedToken && getAddress( authState.encodedToken );
    },[authState.encodedToken]);

    return<>
        <AuthorizerContext.Provider value={{ authState , authDispatch }} >
            {children}
        </AuthorizerContext.Provider>
    </>

}

const useAthorizer = ()=> useContext(AuthorizerContext);

export {useAthorizer , AuthorizeProvider };