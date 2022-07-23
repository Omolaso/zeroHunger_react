import { createSlice } from "@reduxjs/toolkit";
import products  from '../external/items.js';


const initialState = {
    cartItems: products,
    quantity: 0,
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cartItems = []
        },
        increment: (state) => {
            state.quantity += 1
        },
        decrement: (state) => {
            state.quantity -= 1
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            let quantity = state.quantity;
            state.cartItems.forEach(item => {
                amount = quantity;
                total += amount * item.price
            })
            state.amount = amount;
            state.total = total;
        },
    },
});

// console.log(cartSlice);

export const {clearCart, increment, decrement, calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;