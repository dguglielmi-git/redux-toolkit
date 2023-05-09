import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/reducers/counterSlice";
import testReducer from "./features/reducers/testSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer,
  },
});
