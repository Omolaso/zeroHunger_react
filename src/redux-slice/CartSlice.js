import { createSlice } from "@reduxjs/toolkit";
import products  from '../external/items.js';


const initialState = {
    cartItems: products,
    quantity: 0,
    cartAmount: [],
    total: 0,
    items: {}
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cartAmount = []
        },
        increment: (state, action) => {
            if(state.items[`${action.payload.name}`]){
                state.cartAmount.push(action.payload)
                state.items[`${action.payload.name}`] = parseInt(state.items[`${action.payload.name}`]) + 1
            }
            else{
                state.items[`${action.payload.name}`] = 1
                state.cartAmount.push(action.payload)
            }
            // console.log(action);
        },

        decrement: (state, action) => {
            if(state.items[`${action.payload.name}`]){
                state.cartAmount.pop(action.payload)
                state.items[`${action.payload.name}`] = parseInt(state.items[`${action.payload.name}`]) - 1
            }
            else{
                state.items[`${action.payload.name}`] = 1
                state.cartAmount.pop(action.payload)
            }
        },
    },
});

// console.log(cartSlice);

export const {clearCart, increment, decrement} = cartSlice.actions;

export default cartSlice.reducer;