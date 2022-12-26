import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { AddToCart } from '../Features/cartSlice';
import { fetchAllProducts } from '../Features/cartSlice';

// import { fetchProducts } from '../Features/cartSlice';

const Product = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllProducts());
  },[])
  const products = useSelector(state=>state.allCarts.items)
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {
            products.map(product=>(
              <div className="col-sm-3 col-md-3 card" key={product.id}>
                <img src={product.image} className="img-thumbnail" alt="product image" />
                <div className="text-center">
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  {/* <span>{product.description}</span> */}
                  <button className='btn btn-sm btn-dark' onClick={()=>dispatch(AddToCart(product))}>Add To Cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Product


