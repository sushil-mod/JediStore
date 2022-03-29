import React from 'react';


const authReducerFunc =( authState , authAction )=>{

    const {type , payload }=authAction;
    console.log("from reducer" , type , payload )
    switch(type){
        case "LOGIN":
            return {...authState , ...payload.foundUser , loginStatus:true ,encodedToken : payload.encodedToken }
        case "SIGNUP":
            return {...authState , ...payload.createdUser , loginStatus:true ,encodedToken : payload.encodedToken }
        case "ADD_TO_CART":
            return {...authState, cart:payload}
        case "QUANTITY":
            return {...authState, cart:payload}
        case "REMOVE_FROM_CART":
            return {...authState, cart:payload}
        case "LOGOUT":
            return {
                loginStatus : false ,
                encodedToken :""
            } 
        default:
            return userState;

    }


}
export default authReducerFunc;