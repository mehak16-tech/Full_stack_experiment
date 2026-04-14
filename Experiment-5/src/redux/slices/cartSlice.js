import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action) => {

      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;   // increase quantity
      } else {
        state.items.push({
          ...action.payload,
          qty: 1
        });
      }

    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    updateQty: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload.id
      );

      if (item) {
        item.qty = action.payload.qty;
      }
    }

  }
});

export const { addItem, removeItem, updateQty } = cartSlice.actions;
export default cartSlice.reducer;