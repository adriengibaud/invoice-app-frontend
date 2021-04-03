import data from 'data/data';

const invoiceReducer = (state = data, action) => {
  switch (action.type) {
    case 'invoice/getAllInvoices':
      return action.data;
    default:
      return state;
  }
};

export default invoiceReducer;
