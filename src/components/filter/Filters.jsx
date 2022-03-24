import React from 'react';

import './Filters.css';

function Filters(){


    const catgegoryList =["Clothes","Toys","Collectibles","Merchandise"];

    return <>
                <aside className="flex-col product-sidebar bx-shadow aside-height " >

                        <div className="flex-space-btw padd-md filter-border ">
                            <h2>Filters</h2>
                            <button className='filter-btn' >Clear</button> 
                        </div>

                
                        <div>

                            <p className="filter-head padd-md " >Sort By Price</p>
                            <div className="filter-list">

                                <ul>
                                    <li>
                                        <input type="radio" id="sort_high_to_low" name="sort"/>
                                        <label for="sort_high_to_low"> High to Low</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="low_to_high" name="sort"/>
                                        <label for="low_to_high"> Low to High</label>
                                    </li>
                                </ul>

                            </div>    

                            <p className="filter-head padd-md" >Rating</p>
                            <div className="filter-list" >
                                <ul>

                                    { [4,3,2,1].map( (number)=> <li key={number}> <label><input type='radio' name='rating' value={number}  /> {number} stars & above </label> </li> )  }

                                </ul>
                            </div>

                            <div >
                                <p className="filter-head padd-md" >Catagories</p>
                                <div className="filter-list" >
                                    <ul>

                                        {catgegoryList.map((item)=> <li key={item}> <label><input type="checkbox" name='category' /> {item}</label>  </li>   )}
                                    </ul>
                                </div>
                                <p className="filter-head padd-md" >Price</p>
                                <input className="filter-slider"  type="range" min="1" max="100" />
                                <div className="flex-space-btw slider-range" >
                                    <p>0</p>
                                    <p>5000</p>
                                    <p>10000</p>
                                </div>
                            </div>    
                        </div>
                </aside>
    
    </>
}

export default Filters;