import React from 'react';
import { useSelector } from 'react-redux';

const InvoicesList = () => {
  const invoicesData = useSelector(({ invoices }) => invoices);

  return <div></div>;
};

export default InvoicesList;
