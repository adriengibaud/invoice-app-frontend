import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from 'reducers/invoicesSlice';
import userReducer from 'reducers/userSlice';

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    user: userReducer,
  },
});

export default store;
