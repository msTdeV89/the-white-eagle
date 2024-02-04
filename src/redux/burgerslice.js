import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isOpen: false,
  },
  reducers: {
    burgerToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { burgerToggle } = burgerSlice.actions;
export default burgerSlice.reducer;
