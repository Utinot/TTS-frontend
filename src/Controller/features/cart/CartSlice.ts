import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IProductState {
    cart: {},
    carts: any[],
    orderdetail: any[]
}

const initialState: IProductState = {
    cart: {},
    carts: [],
    orderdetail: []
};
if (localStorage.getItem("cart")) {
    initialState.carts = JSON.parse(localStorage.getItem("cart") as any);
} else {
    initialState.carts = [];
}

export const addCart = createAsyncThunk(
    "cart/addcart",
    async (product: any) => {
        let carts = [];
        if (localStorage.getItem("cart")) {
            carts = JSON.parse(localStorage.getItem("cart") as any);
        } else {
            carts = [];
        }
        const existProduct = carts.find(
            (item: { _id: string | undefined }) => item._id === product._id
        );
        const existColor = carts.find(
            (item: { color: string }) => item.color === product.color
        );
        const existSize = carts.find(
            (item: { size: string }) => item.size === product.size
        );

        if (!existProduct) {
            carts.push(product);
        } else {
            if (!existColor || !existSize) {
                carts.push(product);
            } else {
                existProduct.quantity += product.quantity;
            }
        }
        return carts;
    }
);

export const removeCart = createAsyncThunk("cart/removecart", (info: any) => {
    return info
})


export const DecrementRe = createAsyncThunk("cart/decrement", (info: any) => {
    return info
})

export const IncrementRe = createAsyncThunk("cart/increment", (info: any) => {
    return info
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(addCart.fulfilled, (state: any, { payload }) => {
            localStorage.setItem("cart", JSON.stringify(payload));
            state.carts = payload;
        }),
            build.addCase(removeCart.fulfilled, (state, { payload }) => {
                const cart = JSON.parse(localStorage.getItem("cart") as any)
                const cartsa = cart.find((item: any) => item._id == payload._id)
                const cartsb = cart.filter((item: any) => item !== cartsa)
                localStorage.setItem("cart", JSON.stringify(cartsb))
                state.carts = cartsb
            }),
            build.addCase(DecrementRe.fulfilled, (state, { payload }) => {
                const cart = JSON.parse(localStorage.getItem("cart") as any)
                const cartsa = cart.find((item: any) => item._id == payload._id)
                cartsa.quantity--
                if (cartsa.quantity <= 0) {
                    const confirm = window.confirm("Bạn có chắc chắn muốn xoá không")
                    if (confirm) {
                        const cartsb = cart.filter((item: any) => item !== cartsa)
                        localStorage.setItem("cart", JSON.stringify(cartsb))
                        state.carts = cartsb
                        return
                    }
                    else {
                        return
                    }
                }
                localStorage.setItem("cart", JSON.stringify(cart))
                state.carts = cart
            }),
            build.addCase(IncrementRe.fulfilled, (state, { payload }) => {
                const cart = JSON.parse(localStorage.getItem("cart") as any)
                const cartsa = cart.find((item: any) => item._id == payload._id)
                cartsa.quantity++

                localStorage.setItem("cart", JSON.stringify(cart))
                state.carts = cart
            })
    }
});
export default cartSlice.reducer;
