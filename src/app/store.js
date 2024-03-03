import { configureStore } from "@reduxjs/toolkit";
// import reducers
import formsReducer from '../features/formsSlice';

export default configureStore({
  reducer: {
    forms: formsReducer
  }
});
