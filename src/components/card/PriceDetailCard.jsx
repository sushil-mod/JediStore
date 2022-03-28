import React from 'react'

function PriceDetailCard({cart}) {

   const detailsReducer=(acc , curr )=>{
    return {...acc , price: acc.price + curr.orignalPrice*curr.qty,
         discount: acc.discount+((curr.discount*curr.orignalPrice*curr.qty)/100) , 
         qty:acc.qty+curr.qty
        }
   }
    const { price, discount, qty, delivery } = cart.reduce( detailsReducer , { price:0, discount:0 , qty:0, delivery:100 } );

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

                <button className="btn cart-btn wd-100 padd-sm" > Place order </button>

                <div className="flex-center">
                    <p>you will save ₹{discount} on this order</p>
                </div>

            </div>

        </div> 
  
  </>
}

export default PriceDetailCard ;
