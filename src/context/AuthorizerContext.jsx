import React ,{useReducer ,createContext ,useContext }from 'react';
import  authReducerFunc from '../reducer/authReducerFunc';



const AuthorizerContext = createContext();

const AuthorizeProvider = ({children})=>{
    const initialAuthState = {
        loginStatus : false ,
        encodedToken :""
    }

    const [ authState , authDispatch ] = useReducer( authReducerFunc , initialAuthState);
    console.log( "from context" ,authState);

    return<>
        <AuthorizerContext.Provider value={{ authState , authDispatch }} >
            {children}
        </AuthorizerContext.Provider>
    </>

}

const useAthorizer = ()=> useContext(AuthorizerContext);

export {useAthorizer , AuthorizeProvider };