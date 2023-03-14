import { configureStore } from "@reduxjs/toolkit";
import VerifSliceReducer from "./VerifSlice";

const store = configureStore({
    reducer:{
        VerifSlice: VerifSliceReducer
    }
})

export default store;