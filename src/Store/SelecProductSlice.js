import { createSlice } from "@reduxjs/toolkit";
import '../index.css'
const productSelectSlice=createSlice({
    name:"productdefine",
    initialState:'',
    reducers:{
        selectProduct:((state, action)=>{
           return action.payload;
        })
    }

})
export const productSelectAction=productSelectSlice.actions;
export default productSelectSlice;