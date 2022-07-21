import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux-slice/CartSlice'
// import loginReducer from '../redux-slice/LoginSlice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
        // login: loginReducer
    }
})

// console.log(store);

export default store