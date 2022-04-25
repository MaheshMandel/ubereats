import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderedItems: [],
}

const orderCompleteSlice = createSlice({
    name: "orderComplete",
    initialState,
    reducers: {
        addOrderedItem: (state, action) => {
            state.orderedItems = [...state.orderedItems, action.payload.orderedItems];
        }
    }
});

export const { addOrderedItem } = orderCompleteSlice.actions;

export const selectOrderedItems = state => state.orderComplete.orderedItems;

export default orderCompleteSlice.reducer;