import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "cairo",
  status: false,
};

const addressSlice = createSlice({
  name: "mangeAddress",
  initialState,
  reducers: {
    addAddress(state, action) {
      const address = action.payload;
      state.address = address;
      state.status = !state.status;
    },
    toggleSwitch(state) {
      state.status = !state.status;
    },
  },
});

export const { toggleSwitch, addAddress } = addressSlice.actions;
export default addressSlice.reducer;
