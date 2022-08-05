import axios from 'axios';
import React, { useEffect, useState} from 'react';
import AddressList from '../../components/list/AddressList';
import Navbar from '../../components/navbar/Navbar';
import { useAthorizer } from '../../context/AuthorizerContext';
import { toast } from 'react-toastify';
import { detailsReducer } from '../../service calls/sevices';
import { useNavigate } from 'react-router-dom';


function Checkout() {
  const {authState:{address , cart ,encodedToken},authDispatch  } = useAthorizer();
  const navigate = useNavigate();
  console.log("list", address , cart,encodedToken);
  const [ disbaled ,setDisbaled ] = useState(true);
  const { price, discount, qty, delivery } = cart.reduce( detailsReducer , { price:0, discount:0 , qty:0, delivery:100 } );


  const clearAllCart = async () =>{
    try {
      const res = await axios.delete("/api/user/cart",{headers:{authorization: encodedToken }});
      console.log(" clear ALL ",res)
      authDispatch({ type:"CLEAR_CART",payload:res.data.cart}); 
    } catch (error) { 
      console.error("clear ALL ",error);
    }
  }


  const successTransaction = (response)=>{
    toast.success("Payment successfull");

     clearAllCart();

    if(response){
      navigate("/products");
    }
  }
  const failedTransactions = ()=>{
    toast.error("Payment Unsuccessfull");
    console.log("Failed");
  }

  const checkPaymentHandler =(totalAmount)=>{
    const options = {
        key:"rzp_test_p7ZmsxfPwferdN",
        amount: totalAmount*100 ,
        currency:"INR",
        name:"jedi Store",
        description:"Thank you for choosing Jedi Store",
        image:"",
        handler:(response) =>{
            successTransaction(response);
        },
        modal:{
            onDismiss:() =>{
                console.log("modal was closed");
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

const placeOrderHandler =()=>{
  const res = checkPaymentHandler( price+delivery-discount );
}

  return (
    < >
      <Navbar/>
      <div style={{ display:"flex",justifyContent:"center" }}>

        <div style={{display:"flex",flexDirection:"column",padding:"5rem" }}>

            <div style={{ width:"50rem",height:"4rem",border:"1px solid black",display:"flex",alignItems:"center",padding:"0rem 1rem",justifyContent:"space-between" }} >
                <h3>DELIVERY ADDRESS</h3>
                {/* <button> Add Address </button> */}
            </div>
            <div style={{ width:"50rem",border:"1px solid black"}}>
              { address?.map((addressItem) => <AddressList addressItem={addressItem} key={addressItem._id} setDisbaled={setDisbaled} /> )  }
            </div>
        </div>

        <div style={{ position:"relative" }}>
            
            <div className=" bx-shadow cart-bill">

              <div style={{ width:"20rem", height:"25rem" , padding:"1rem 1rem ",border:"2px solid black", marginTop:"5rem" ,position:"sticky",top:"5rem" }} >

                <h2 className="bodr-btm">Price details</h2>

                <div className="flex-space-btw bill-item">
                  <p>Price(total {qty} items )</p>
                  <p>{price - discount}</p>            
                </div> 

                <div className="flex-space-btw bill-item bodr-btm">
                  <p>Delivery charges</p>
                  <p>₹{delivery}</p>
                </div>

                <div className="flex-space-btw bill-item bodr-btm" >
                  <h4>Total amount</h4>
                  <p>₹{price + delivery - discount} </p>
                </div>

                <button className={`btn cart-btn wd-100 padd-sm ${ disbaled ? "cursor-notAllowed": "cursor-pointer"} `} onClick={ placeOrderHandler } disabled={disbaled} > Place order </button>

                <div className="flex-center">
                  <p>you will save ₹ {discount} on this order</p>
                </div>

              </div>

            </div> 
            
          
        </div>    

      </div>
    </>
  )
}

export default Checkout;
