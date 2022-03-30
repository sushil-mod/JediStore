import axios from 'axios';
import React from 'react';


const addToCart = async (product,{encodedToken,authDispatch,navigator })=>{
    try {
        const response = await axios.post("/api/user/cart",{product},{headers:{ authorization : encodedToken }})
        authDispatch({ type:"ADD_TO_CART" ,payload : response.data.cart });
    } catch (error) {
        alert("Login to use cart ");
        navigator("/login");
        console.error(error);
    }
}


const addToWishlist = async (product,{encodedToken,authDispatch})=>{
    
    try {
        const { data } = await axios.post("/api/user/wishlist",{product},{headers:{ authorization : encodedToken }})
        console.log("form atw",data)
        authDispatch({ type:"ADD_TO_WISHLIST",payload:data.wishlist});
    } catch (error) {
        console.error(error)
    }
}

const removeFromWishlist = async (productId,{encodedToken,authDispatch})=>{
    
    try {
        const { data } = await axios.delete( `/api/user/wishlist/${productId}`,{headers:{ authorization : encodedToken }})
        console.log("form atw",data)
        authDispatch({ type:"REMOVE_FROM_WISHLIST",payload:data.wishlist})
    } catch (error) {
        console.error(error)
    }
}

const productQtyHandler = async( productId , type ,{encodedToken,authDispatch } ) => {
   
    try {
     const response = await axios.post(`/api/user/cart/${productId}`,{action:{type:`${type}`}},{headers:{authorization : encodedToken }})   
        authDispatch({ type:"QUANTITY" , payload : response.data.cart})
    } catch (error) {
        console.log(error);
    }
}

const removeFromCart = async(productId,{encodedToken,authDispatch }) =>{
   
    try {
            const response = await axios.delete(`/api/user/cart/${productId}`,{headers:{authorization : encodedToken }})
            authDispatch({type:"REMOVE_FROM_CART" , payload:response.data.cart});
    } catch (error) {
        console.error(error);
    }
}

const detailsReducer=(acc , curr )=>{
    return {...acc , price: acc.price + curr.orignalPrice*curr.qty,
         discount: acc.discount+((curr.discount*curr.orignalPrice*curr.qty)/100) , 
         qty:acc.qty+curr.qty
        }
   }


export { addToCart ,addToWishlist ,removeFromWishlist ,productQtyHandler ,removeFromCart ,detailsReducer};