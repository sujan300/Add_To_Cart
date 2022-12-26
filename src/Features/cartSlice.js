import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Product from "../components/Product";
import productsData from "../productsData";

// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     console.log("data from fetchProducts from ---->",data)
//     return data;
//   });




const initialState = { 
    cart:[],
    items: [],
    totalQuantity:0,
    totalPrice:0,
    subTotal:0,
 };




// fetch all products 
export const fetchAllProducts = createAsyncThunk("products/fetchProducts",async()=>{
    const res = await axios.get('http://fakestoreapi.com/products');
    const data = res.data;
    data.map(item=>{
        item.quantity=1;
    })
    return data
})

const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        AddToCart:(state,action)=>{
            let find =state.cart.findIndex((item)=>item.id===action.payload.id)
            if(find>=0){
                state.cart[find].quantity+=1;
            }else{
                state.cart.push(action.payload);
            }
        },
        incrementQuantity:(state,action)=>{
            const index =state.cart.findIndex((item)=>item.id===action.payload.id)
            state.cart[index].quantity+=1;
        },
        decreamentQuantity:(state,action)=>{
            const index = state.cart.findIndex(item=>item.id===action.payload.id)
            if(state.cart[index].quantity===1){
                state.cart[index].quantity=1;
            }else{
                state.cart[index].quantity -=1;
            }
        },
        removeItem:(state,action)=>{
            const index = state.cart.findIndex(item=>item.id===action.payload.id)
            state.cart.splice(index, 1);
        },
        deleteAll:(state)=>{
            state.cart=[];
            state.totalQuantity=0;
        },


        getCartTotal: (state) => {
            let { totalQuantity, subTotal } = state.cart.reduce(
              (cartTotal, cartItem) => {
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const { price, quantity } = cartItem;
                console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.subTotal += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
              },
              {
                subTotal: 0,
                totalQuantity: 0,
              }
            );
            state.subTotal = parseInt(subTotal.toFixed(2));
            state.totalQuantity = totalQuantity;
          },
        },
    extraReducers:{
        [fetchAllProducts.fulfilled]:(state,action)=>{
            state.items = action.payload;
        }
    }
})




export const { AddToCart,incrementQuantity,decreamentQuantity,removeItem,deleteAll,getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;

