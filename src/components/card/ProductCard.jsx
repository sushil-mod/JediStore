import React from 'react';
import { FaShoppingCart,FaStar } from 'react-icons/fa';
import './ProductCard.css'
  

function ProductCard ( {product}){

const {_id , name , rating , orignalPrice , discount , imageUrl , categoryName , tag , description} = product;

return <div key={_id}>
    <div className="card card-pos-rel">
        <img className="card-img" src={imageUrl} alt="Lago di Braies" />

        <button className="dismiss"><i class="fas fa-heart wishlist-icon "></i></button>

        { tag==="Trending" && <span class="card-badge">{tag}</span>}
        { tag==="New Arrival" && <span class="card-badge badge-arrival">{tag}</span> }

        <div className="card-details">

            <div className='flex-space-btw'>
                <div>
                    <span className="card-tag">{ categoryName }</span>
                    {tag&&<span className="card-tag">{ tag }</span>}
                </div>

                <div>
                    <span className=" card-rating">{rating}
                        <FaStar /> </span>
                </div>
            </div>




            <div className="card-header">{ name }</div>
            <p className="card-text">{description}</p>


            <div className="flex-space-btw">



                <span>Rs :
                    <h4 className="inline-block price"> { Math.ceil(( orignalPrice * (100 -
                        discount)) / 100) }
                        <span className='original-price'>
                            <sup>{orignalPrice} </sup>
                        </span>
                        ({ discount }% OFF)
                    </h4>
                </span>

            </div>
            <button className="btn btn-shop card-fix-btn card-btn-pri ">
                <FaShoppingCart /> Add to Cart </button>

        </div>
    </div>

</div>

}
export default ProductCard;