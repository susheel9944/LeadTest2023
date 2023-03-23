import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartData = createAsyncThunk("cart/getCartData", async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// export const getCartData = createAsyncThunk(
//   "projects/voteProject",
//   async () => {
//     try {
//       const response = await axios.get(
//         "https://api.escuelajs.co/api/v1/categories"
//       );
//       return response.data;
//     } catch (err) {
//       // custom error
//     }
//   }
// );

// export const getCartData = createAsyncThunk("cart/getCarData", async () => {
//   const res = await fetch("https://api.escuelajs.co/api/v1/categories");
//   const data = await res.json();
//   return data;
// });

const getCartDataSlice = createSlice({
  name: "getData",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },

  extraReducers: {
    [getCartData.pending]: (state, action) => {
      state.loading = true;
    },
    [getCartData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = [action.payload];
    },
    [getCartData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default getCartDataSlice.reducer;
