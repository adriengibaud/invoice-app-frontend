import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InvoiceEntry from './InvoiceEntry';

const InvoicesList = () => {
  const invoicesData = useSelector(({ invoices }) => invoices);

  return (
    <InvoicesListContainer>
      {invoicesData.map((e) => (
        <Link to={`/invoice/${e.id}`}>
          <InvoiceEntry invoice={e} />
        </Link>
      ))}
    </InvoicesListContainer>
  );
};

export default InvoicesList;

const InvoicesListContainer = styled.div`
  width: 1000px;
  height: 700px;
  display: flex;
  flex-direction: column;
`;
