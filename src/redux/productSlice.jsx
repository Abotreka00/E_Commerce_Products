import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsAsyncThunk = createAsyncThunk(
  "fetchproducts",
  async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      console.error("createAsyncThunk: ", error);
    }
  }
);

const initialState = {
  products: [],
  searchTirm: "",
  searchProd: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearch(state, action) {
      state.searchTirm = action.payload;
      state.searchProd = state.products.filter((product) =>
        product.title.toLowerCase().includes(state.searchTirm.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productsAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(productsAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProducts, setSearch } = productSlice.actions;
export default productSlice.reducer;
