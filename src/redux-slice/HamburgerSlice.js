import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHamActive: false
}

const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers: {
        handleHamburgerToggle: (state) => {
            // state.isHamActive = true;
            state.isHamActive = !state.isHamActive;
        },
        removeSideBar: (state) => {
            state.isHamActive = false;
        }
    }

});

export const { handleHamburgerToggle, removeSideBar } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;