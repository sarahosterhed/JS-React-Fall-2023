// create your store here
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice"

const reducer = combineReducers({
    cart: cartReducer,
});

const store = configureStore({
    reducer: reducer,
});

export default store;