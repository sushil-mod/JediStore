import React, { useState } from 'react';



function AddressList({ addressItem,setDisbaled }) {

    console.log("item",addressItem);
    const [showEdit ,setShowEdit] = useState(false);
    const [userAddress ,setUserAddress] = useState({})
    
    const inputhandler=(e)=>{
      console.log( e.target.value);
      setUserAddress({ ...userAddress,[e.target.name]:e.target.value})
    }
    const showEditHandler =()=>{
      setUserAddress(addressItem);
      setShowEdit(true);
    }

  



  return (
    !showEdit ? <div style={{ display:"flex",border:"1px solid black",flexDirection:"column",padding:"1rem" }}> 
        <label style={{ display:"flex",justifyContent:"space-between" }} > 
            <span style={{ display:"flex",alignItems:"center",fontSize:"1.2rem",paddingBottom:"0.5rem",fontWeight:"bold" }} >
                <input type="radio" name='address' style={{ marginRight:"1rem"}} onChange={()=>setDisbaled(false)} />{addressItem.name}    { addressItem.mobile } 
            </span> 
            {/* <button onClick={ showEditHandler } >Edit</button>  */}
        </label> 
        <p style={{ marginLeft:"1.7rem" }} > { addressItem.street } , { addressItem.city }</p>
        <p style={{ marginLeft:"1.7rem" }} > { addressItem.state } -<b> { addressItem.pincode }</b></p>    
  </div> :
  <div style={{ width:"100%" }} >
    <form style={{ padding:"2rem",border:"1px solid black",display:'flex',flexDirection:"column",gap:"1rem" }}>
      <div style={{ display:"flex",gap:"1rem"  }}>
        <label htmlFor="">
          <input type="text" placeholder='Enter your Name' name='name' value={userAddress?.name} 
            style={{ height:'2rem',fontSize:"1rem",paddingLeft:"0.5rem",width:"15rem" }} onChange={(e)=> inputhandler(e) } />
        </label>
        <label htmlFor=""><input type="number" placeholder='Enter 10 digit Mobile number' style={{ height:'2rem',fontSize:"1rem",paddingLeft:"0.5rem" ,width:"15rem" }} /></label>
      </div>
      <div>
        <label htmlFor=""><textarea type="text" placeholder='Enter your Street and Area' style={{ width:"31rem",borderRadius:"0px",borderColor:"inherit" }} /></label>
      </div>
      <div style={{ display:"flex",gap:"1rem"  }}>
        <label htmlFor=""><input type="text" placeholder='Enter your pincode' style={{ height:'2rem',fontSize:"1rem",paddingLeft:"0.5rem" ,width:"15rem"}} /></label>
        <label htmlFor=""><input type="text" placeholder='Enter your city' style={{ height:'2rem',fontSize:"1rem",paddingLeft:"0.5rem" ,width:"15rem"}} /></label>
      </div>
      <div>
        <input type="text" placeholder='Enter your State' style={{ height:'2rem',fontSize:"1rem",paddingLeft:"0.5rem" ,width:"15rem"}} />
      </div>
      <div>
        <button>Update</button>
        <button>Close</button>
      </div>
    </form>
  </div>
  )
}

export default AddressList;
