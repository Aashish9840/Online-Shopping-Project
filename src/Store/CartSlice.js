import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const checkItem = state.find((item) => item.id === action.payload.id);
      if (checkItem) {
        checkItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const checkItem = state.find((item) => item.id === action.payload.id);
      if (checkItem.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        checkItem.quantity -= 1;
      }
    },
  },
});

export const CartSliceAction = CartSlice.actions;
export default CartSlice;
