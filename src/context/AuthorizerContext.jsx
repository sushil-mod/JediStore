import React ,{useReducer ,createContext ,useContext }from 'react';




const AuthorizerContext = createContext();

const AuthorizeProvider = ({children})=>{

    const initialAuthState = {
        loginStatus : false ,
        encodedToken :""
    }


    const authReducerFunc =( authState , authAction )=>{

        const {type , payload }=authAction;
        switch(type){
            case "LOGIN":
                return {...authState , ...payload.foundUser , loginStatus:true ,encodedToken : payload.encodedToken }
            case "SIGNUP":
                return {...authState , ...payload.createdUser , loginStatus:true ,encodedToken : payload.encodedToken } 
            default:
                return userState;

        }


    }


    const [ authState , authDispatch ] = useReducer( authReducerFunc , initialAuthState);

    console.log("mai hu state", authState);

    return<>
        <AuthorizerContext.Provider value={{ authState , authDispatch }} >
            {children}
        </AuthorizerContext.Provider>
    </>

}

const useAthorizer = ()=> useContext(AuthorizerContext);

export {useAthorizer , AuthorizeProvider };