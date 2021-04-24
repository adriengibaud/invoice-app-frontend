const invoiceSchema = {
  id: '',
  createdAt: '',
  paymentDue: '',
  clientName: '',
  clientEmail: '',
  description: '',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  items: [
    {
      id: 'qiweuqoiwdqjd131093810938109',
      name: 'Brand Guidelines',
      quantity: 1,
      price: 1800.9,
      total: 1800.9,
    },
    {
      id: 'alkdjasdlkjasdlajd908908098asdasd',
      name: 'Brand Guidelines',
      quantity: 1,
      price: 1800.9,
      total: 1800.9,
    },
  ],
};

export default invoiceSchema;
