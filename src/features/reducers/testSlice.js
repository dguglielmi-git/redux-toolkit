import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    plugin: "empty",
    isWorking: true,
  },
  reducers: {
    workingStatus: (state, action) => {
      state.isWorking = action.payload;
    },
    plugin: (state, action) => {
      state.plugin = action.payload;
    },
  },
});

export const {workingStatus,plugin} = testSlice.actions;

export default testSlice.reducer;

