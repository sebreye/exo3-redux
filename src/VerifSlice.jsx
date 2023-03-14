import { createSlice } from "@reduxjs/toolkit";

export const VerifSlice = createSlice({
    name: "verif", 
    initialState: {
        value: "sebreyes222@gmail.com",
        connect: false
    },
    reducers: {
        okemail: (state, action) => {
            if (state.value === action.payload) {
                console.log("bienvenue");
                return {...state, connect: true };
            } else{
                alert('invalid email')
                return{...state, connect: false}
            }
            }
    }
})
export const {okemail} = VerifSlice.actions
export default VerifSlice.reducer