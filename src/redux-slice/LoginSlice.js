import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        
    }
})

export default loginSlice.reducer;