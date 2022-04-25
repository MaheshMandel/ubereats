import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: {
        items: [],
        restaurantName: "",
    },
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.selectedItems = {
                items: [...state.selectedItems.items, action.payload.items],
                restaurantName: action.payload.restaurantName,
            }
        },
        removeItem: (state, action) => {
            state.selectedItems = {
                items: [...state.selectedItems.items.filter(item => item.title !== action.payload.items.title)],
                restaurantName: action.payload.restaurantName,
            }
        },
        clearCart: (state) => {
            state.selectedItems = {
                items: [],
                restaurantName: "",
            }
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.selectedItems;

export default cartSlice.reducer;