import React from 'react'
import Filters from '../../components/filter/Filters';
import { useProducts } from '../../context/ProductContext';
import ProductCard from '../../components/card/ProductCard';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Product.css';


function Product() {


    const { productList } = useProducts();
  return <>
     <Navbar/>
  <div className='d-flex' >
        <Filters/>


        <div className='main-content-product' > 

                {productList.map(( product )=>  <ProductCard product={ product }  key = {product._id} />  )}

        </div> 



    </div>
    <Footer/>
</>
}

export default Product
