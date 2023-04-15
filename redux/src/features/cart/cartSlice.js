import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";
// import { openModal } from "../modal/modalSlice";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      // console.log(thunkAPI);
      // thunkAPI.dispatch(openModal());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong!");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // return { ...state, cartItems: [] };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount += 1;
    },
    decreaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
