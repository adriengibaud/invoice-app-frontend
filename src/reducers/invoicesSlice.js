import { createSlice } from '@reduxjs/toolkit';
import data from 'data/data';

const initialState = {
  data,
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {},
});

export const selectInvoices = (state) => state.invoices.data;

export default invoicesSlice.reducer;
