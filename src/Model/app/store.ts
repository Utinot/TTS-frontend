import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CartSilce from "../../Controller/features/cart/CartSlice";


export const store = configureStore({
    reducer: {
        cart: CartSilce
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;