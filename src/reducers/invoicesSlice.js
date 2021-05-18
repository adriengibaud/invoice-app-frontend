/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import invoiceApi from 'api/invoice';

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: [],
  reducers: {
    // eslint-disable-next-line arrow-body-style
    deleteInvoice: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    cleanInvoice: () => [],
    // eslint-disable-next-line arrow-body-style
    saveInvoice: (state, action) => {
      const newState = [...state, action.payload];
      return newState;
    },
    fetchAllInvoice: (state, action) => action.payload,
    editInvoice: (state, action) => {
      const invoice = action.payload;
      const newState = state.map((e) => (e.id === invoice.id ? invoice : e));
      return newState;
    },
    setInvoiceStatus: (state, action) => {
      const invoice = state.find((e) => e.id === action.payload.id);
      const modifiedInvoice = { ...invoice, status: action.payload.status };
      const newState = state.map((e) => (e.id === modifiedInvoice.id ? modifiedInvoice : e));
      return newState;
    },
  },
});

export const {
  cleanInvoice,
  deleteInvoice,
  saveInvoice,
  editInvoice,
  setInvoiceStatus,
  fetchAllInvoice,
} = invoicesSlice.actions;

export const selectInvoices = (state) => state.invoices;

export default invoicesSlice.reducer;

export const fetchInvoiceByUserId = (userId) => async (dispatch) => {
  try {
    const response = await invoiceApi.getAll(userId);
    if (response.length > 0) dispatch(fetchAllInvoice(response));
  } catch {
    console.log('error');
  }
};

export const createInvoice = (invoice) => async (dispatch) => {
  try {
    const response = await invoiceApi.create(invoice);
    dispatch(saveInvoice(response));
  } catch {
    console.log('error');
  }
};

export const updateInvoice = (invoice) => async (dispatch) => {
  try {
    const response = await invoiceApi.update(invoice);
    dispatch(editInvoice(response));
  } catch {
    console.log('Error');
  }
};

export const deleteInvoiceById = (id) => async (dispatch) => {
  try {
    invoiceApi.deleteInvoice(id);
    dispatch(deleteInvoice(id));
  } catch {
    console.log('Error');
  }
};
