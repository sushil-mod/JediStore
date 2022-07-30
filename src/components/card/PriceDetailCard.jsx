import React from 'react'
import {detailsReducer}from '../../service calls/sevices';
import { toast } from 'react-toastify';

function PriceDetailCard({cart}) {

    const { price, discount, qty, delivery } = cart.reduce( detailsReducer , { price:0, discount:0 , qty:0, delivery:100 } );

    const successTransaction = (response)=>{
         toast.success("Payment successfull");
        console.log("success",response);
    }
    const failedTransactions = ()=>{
        toast.error("Payment Unsuccessfull");
        console.log("Failed");
    }
    const checkPaymentHandler =(totalAmount)=>{
        const options = {
            key:"rzp_test_p7ZmsxfPwferdN",
            amount:totalAmount * 100 ,
            currency:"INR",
            name:"jedi Store",
            description:"Thank you for choosing Jedi Store",
            image:"",
            handler:(response) =>{

                successTransaction(response);

            },
            modal:{
                onDismiss:() =>{
                    console.log("modal was closed")
                },
            },
            prefill:{
                name:"test name",
                email:"testPayment@gmail.com",
                contact:"9999999999",
            },
            theme:{
                color:"#7e22ce"
            },
        };

        const  razorpayModal = new window.Razorpay(options);
        razorpayModal.open();
        razorpayModal.on("payment.failed",(response)=>{
            failedTransactions(response);
        });
    };

  return <>
  
        <div className=" bx-shadow cart-bill">

            <div style={{ width:"20rem", height:"25rem" , padding:"1rem 1rem " }} >

                <h2 className="bodr-btm">Price details</h2>

                <div className="flex-space-btw bill-item">
                    <p>Price(total {qty} items )</p>
                    <p>{price}</p>            
                </div> 

                <div className="flex-space-btw bill-item">
                    <p>Discount</p>
                    <p>-₹{discount}</p>
                </div>

                <div className="flex-space-btw bill-item bodr-btm">
                    <p>Delivery charges</p>
                    <p>₹{delivery}</p>
                </div>

                <div className="flex-space-btw bill-item bodr-btm" >
                    <h4>Total amount</h4>
                    <p>₹{price + delivery - discount }</p>
                </div>

                <button className="btn cart-btn wd-100 padd-sm"  
                    onClick={()=>{ checkPaymentHandler( price+delivery-discount )}}
                > Place order </button>

                <div className="flex-center">
                    <p>you will save ₹{discount} on this order</p>
                </div>

            </div>

        </div> 
  
  </>
}

export default PriceDetailCard ;
