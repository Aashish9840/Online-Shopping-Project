
import { configureStore } from "@reduxjs/toolkit";
import productSelectSlice from "./SelecProductSlice";
import CartSlice from "./CartSlice";



const shoppingStore=configureStore({
    reducer:{
        productSelect:productSelectSlice.reducer,
        CartItemSlice:CartSlice.reducer,
    }

})
export default shoppingStore;