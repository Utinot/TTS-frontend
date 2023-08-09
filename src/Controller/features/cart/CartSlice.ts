import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import "toastr/build/toastr.min.css";
import { ProductType } from '../../../Model/Types/productTypes';

export interface CartItem extends ProductType {
    quantity: number;
}
export interface Cart {
    carts: CartItem[],
    total: number,
    totalItem: number
}

const initialState: Cart = {
    carts: [],
    total: 0,
    totalItem: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const product = action.payload;
            const checkCart = state.carts.find((e) => e.id === action.payload.id);
            if (checkCart) {
                checkCart.quantity += 1;
            } else {
                state.carts.push({ ...product, quantity: 1 })
            }
        },
        increQuantity: (state, action) => {
            const curItem = state.carts.find((item) => item.id === action.payload);
            if (curItem) {
                curItem.quantity += 1
            }
            state.totalItem += 1
            state.total += Number(curItem?.price)
        },
        decreQuantity: (state, action) => {
            const curItem = state.carts.find((item) => item.id === action.payload)
            if (curItem) {
                curItem.quantity -= 1;
                if (!curItem.quantity || curItem.quantity === 0) {
                    state.carts = state.carts.filter((item) => item.id !== action.payload);
                }
            }
            state.totalItem -= 1
            state.total -= Number(curItem?.price)
        },
        removeCart: (state, action) => {
            const curItem = state.carts.find((item) => item.id === action.payload)
            const product = action.payload
            state.carts = state.carts.filter((item) => item.id !== product);
            state.totalItem = state.totalItem - action.payload.quantity;
            state.total -= Number(curItem?.price) * Number(curItem?.quantity)


        },
    }
})

export const { addToCart, increQuantity, removeCart, decreQuantity } = cartSlice.actions
export default cartSlice.reducer