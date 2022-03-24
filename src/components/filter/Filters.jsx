import React from 'react';
import { useProducts } from '../../context/ProductContext';

import './Filters.css';

function Filters(){


    const catgegoryList =["Clothes","Toys","Collectibles","Merchandise"];

     const { filterState , filterDispatch } = useProducts();

    return <>
                <aside className="flex-col product-sidebar bx-shadow aside-height " >

                        <div className="flex-space-btw padd-md filter-border ">
                            <h2>Filters</h2>
                            <button className='filter-btn' onClick={()=> filterDispatch({ type:"CLEAR"})}  >Clear</button> 
                        </div>

                
                        <div>

                            <p className="filter-head padd-md " >Sort By Price</p>
                            <div className="filter-list">

                                <ul>
                                    <li>
                                        <input type="radio" id="high_to_low" name="sort" checked={ filterState.sortBy === "HIGH_TO_LOW" } onChange={()=> filterDispatch({ type: "SORT" , payload: "HIGH_TO_LOW" }) } />
                                        <label htmlfor="high_to_low"> High to Low</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="low_to_high" name="sort" checked={ filterState.sortBy === "LOW_TO_HIGH" } onChange={()=> filterDispatch({ type: "SORT" , payload: "LOW_TO_HIGH" }) }  />
                                        <label htmlfor="low_to_high"> Low to High</label>
                                    </li>
                                </ul>

                            </div>    

                            <p className="filter-head padd-md" >Rating</p>
                            <div className="filter-list" >
                                <ul>

                                    { [4,3,2,1].map( (number)=> <li key={number}> <label><input type='radio' name='rating' value={number} checked={ filterState.rating === number }  onChange={()=> filterDispatch({ type: "RATING" , payload: number })} /> {number} stars & above </label> </li> )  }

                                </ul>
                            </div>

                            <div >
                                <p className="filter-head padd-md" >Catagories</p>
                                <div className="filter-list" >
                                    <ul>

                                        {catgegoryList.map((item)=> <li key={item}> <label><input type="checkbox" 
                                         checked={ filterState["category"].includes(item)}  
                                         onChange={()=> filterDispatch({ type:"CATEGORY" , payload : item }) }
                                         /> {item}</label>  </li>   )}
                                    </ul>
                                </div>
                                <p className="filter-head padd-md" >Price</p>
                                <input className="filter-slider"  type="range" min="100" max="10000" value={ filterState.priceRange } 
                                  onChange={(e)=>filterDispatch({ type:"PRICE_RANGE" , payload: e.target.value })}  
                                />
                                <div className="flex-space-btw slider-range " >
                                    <p>0</p>
                                    
                                    <p>10000</p>
                                </div>
                            </div>    
                        </div>
                </aside>
    
    </>
}

export default Filters;