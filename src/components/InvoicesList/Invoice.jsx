import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Invoice = () => {
  const invoicesData = useSelector(({ invoices }) => invoices);
  const { id } = useParams();
  const invoice = invoicesData.find((n) => n.id === id);

  return (
    <InvoiceContainer>
      <p>{invoice.clientName}</p>
      <p>{invoice.clientEmail}</p>
    </InvoiceContainer>
  );
};

export default Invoice;

const InvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
