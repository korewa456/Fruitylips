import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: action.payload.id,
        amount: action.payload.amount,
      };
      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    updateAmount: (state, action) => {
      const { id, amount } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.amount = amount;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateAmount } = counterSlice.actions;

export const selectItems = (state) => state.counter.items;

export default counterSlice.reducer;
