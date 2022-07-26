import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux-slice/CartSlice';
import hamburgerReducer from "../redux-slice/HamburgerSlice";
import searchReducer from "../redux-slice/SearchSlice";
// import loginReducer from '../redux-slice/LoginSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        hamburger: hamburgerReducer,
        search: searchReducer,
        // login: loginReducer
    }
})

// console.log(store);

export default store;