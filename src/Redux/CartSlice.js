import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload);
        },
        updateProduct: (state, action) => {
            const { productId, productImage, productName, productPrice, qty } = action.payload;
            const existingCart = state.cart.find(cartItem => cartItem.productId === productId);
            if (existingCart) {
                existingCart.productImage = productImage;
                existingCart.productName = productName;
                existingCart.productPrice = productPrice;
                existingCart.qty = qty;
            }
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(cartItem => cartItem.productId !== action.payload);
        }
    }
});

export const { addProduct, updateProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
