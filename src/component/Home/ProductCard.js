import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";



const Product = ({product}) => {
  const options={
    edit :false,
    color:'rgba(20,20,20,0.1)',
    activeColor:'tomato',
    value:product.rating,
    size:window.innerWidth <600?20:25,
    isHalf:true,


}
  console.log(product)
  return (
   <Link className='productCard' to={product._id}>
    <img src={product.images[0].url} alt="" />
    <p>{product.name}</p>
    <div>
        <ReactStars {...options}/>
        <span>{product.numofReviews}(Reviews)</span>
        <p>{`₹${product.price}`}</p>
    </div>
   </Link>
  )
}

export default Product
