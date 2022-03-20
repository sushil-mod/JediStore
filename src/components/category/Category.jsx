
import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

import './Category.css';

function Category(){

const [category , setCategory ] = useState([]);

 useEffect(()=>{

    (async()=>{

        try {
            const response = await axios.get("/api/categories");
            console.log(response.data.categories)
            setCategory(response.data.categories);
        } catch (error) {
            console.error(error);
        }

    })();

 },[]);


return<>
    <h1 class="home-content-title margin-btm">Product Catagories</h1>

    <div class="home-product flex-center wd-100 margin-btm">

        {category.map((item) => ( <div class="product-link category-div" key={item._id} ><Link  to="/" className='flex-center'> <img src={item.categoryIcons} alt='clothesImage'/> {item.categoryName} </Link></div>  ) )}
       
    </div>
</>
}

export default Category;