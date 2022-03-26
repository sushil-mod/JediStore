
import React from 'react'
import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';


import './Category.css';

function Category(){
    const { category } = useProducts();
return<>
    <h1 className="home-content-title margin-btm">Product Catagories</h1>

    <div className="home-product flex-center wd-100 margin-btm">

        {category.map((item) => ( <div className="product-link category-div" key={item._id} ><Link  to="/products" className='flex-center'> <img src={item.categoryIcons} alt='clothesImage'/> {item.categoryName} </Link></div>  ) )}
       
    </div>
</>
}

export default Category;