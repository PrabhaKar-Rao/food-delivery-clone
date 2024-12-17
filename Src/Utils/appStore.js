import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


//Creating redux store
const appStore =configureStore({

    reducer :{

        cart : cartReducer,
        
    },
})

export default appStore;