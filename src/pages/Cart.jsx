import React, { useEffect } from 'react'
import {AiFillDelete} from 'react-icons/ai';
import { useSelector,useDispatch } from 'react-redux';
import { incrementQuantity,decreamentQuantity,removeItem,deleteAll,getCartTotal} from '../Features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const {cart,totalQuantity,totalPrice,subTotal,} = useSelector(state=>state.allCarts);
  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])
  return (
    <>
      <div className="container card py-5 mt-5 mb-5">
        <div className="row">
          <div className="col-md-8 py-5 text-center">
          {cart.length>0 ? cart.map(product=>(
                <div className="p-3 border rounded-3 mb-2">
                  <div className="row">
                    <div className=" col-md-2">
                      <img src={product.image} className='img-fluid rounded-3' alt="" />
                    </div>
                    <div className="col-md-8 text-center d-flex justify-content-between  flex-column">
                      <h5>{product.title}</h5>
                      <div className="quantity mb-2">
                        <span className='btn-sm btn-dark m-1 corsur-pointer' onClick={()=>dispatch(decreamentQuantity(product))}>-</span>
                        <span className='value'>{product.quantity}</span>
                        <span className='btn-sm btn-dark m-1' onClick={()=>dispatch(incrementQuantity(product))}>+</span>
                      </div>
                      <h3>Price: ${product.price}</h3>
                    </div>
                    <div className=" col-md-2 d-flex justify-content-center align-items-center">
                      <AiFillDelete className='text-danger icon' onClick={()=>dispatch(removeItem(product))} />
                    </div>
                  </div>
                </div>
              ))
              : <h4 className='text-danger'>No Products in Cart Countinue Shopping </h4>
            }
            {
             cart.length>0 ? <button className="btn-sm btn-danger col-3" onClick={()=>dispatch(deleteAll())}>Clear All</button> : <span></span>
            }
          </div>
          {
          cart.length>0 ?<div className="col-md-4 py-5  px-3">
            <div className="p-3 border rounded-3">
            <h4 className='text-center'>Summery</h4>
            <div className="d-flex justify-content-between">
              <h4>Total Items</h4>
              <h4>{totalQuantity}</h4>  
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h4>Sub Total</h4>
              <h4>${subTotal}</h4>  
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h4>Shipping</h4>
              <h4>$5</h4>  
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h4>Total</h4>
              <h4>${subTotal > 0 ? subTotal+5 : 0}</h4>  
            </div>
            <div className="text-center">
              <button className='btn btn-dark'>CheckOut</button>
            </div>
            </div>
          </div>
          : <span></span>
          }
        </div>
      </div>
    </>
  )
}

export default Cart