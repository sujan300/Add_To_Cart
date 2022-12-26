import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { getCartTotal } from '../Features/cartSlice'
const Navbar = () => {
  const {cart,totalQuantity} = useSelector(state=>state.allCarts);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])
  return (
    <>
        <div className="navbar sticky-top">
            <nav className="container">
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <h2 className='logo text-white text-decoration-none'>Cart</h2>
                </Link>
                <div className="nav-icons">
                   <Link to='/cart'>
                    <AiOutlineShoppingCart className='icon text-white' />
                   </Link>
                   <span className='text-white'>Item:{totalQuantity}</span> 
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar