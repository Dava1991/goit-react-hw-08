import { createSlice } from "@reduxjs/toolkit";
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
  selectors: {
    selectName: (state) => state.name,
  },
});

export const { selectName } = filtersSlice.selectors;

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;