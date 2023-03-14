import { createSlice } from "@reduxjs/toolkit";

export const VerifSlice = createSlice({
    name: "verif", 
    initialState: {
        value: "sebreyes222@gmail.com",
        isConnected: false
    },
    reducers: {
        okemail: (state, action) => {
            if (state.value === action.payload) {
                console.log("bienvenue");
                return { state, isConnected: true };
            } else {
                alert('mauvais email')
            }
            return state;
            }
    }
})
export const {okemail} = VerifSlice.actions
export default VerifSlice.reducer