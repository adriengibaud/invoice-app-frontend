import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NewInvoiceButton from 'components/buttons/NewInvoiceButton';
import InvoiceEntry from './InvoiceEntry';

const InvoicesList = () => {
  const invoicesData = useSelector(({ invoices }) => invoices);

  const subCount = () => {
    switch (invoicesData.length) {
      case 0:
        return 'There is no invoice';
      case 1:
        return 'There is one invoice';
      default:
        return `There are ${invoicesData.length} total invoices`;
    }
  };

  return (
    <InvoicesContainer>
      <InvoicesHeader>
        <InvoicesTitle>
          <h2>Invoices</h2>
          <p>{subCount()}</p>
        </InvoicesTitle>
        <NewInvoiceButton />
      </InvoicesHeader>
      <InvoicesListContainer>
        {invoicesData.map((e) => (
          <Link style={{ textDecoration: 'none' }} to={`/invoice/${e.id}`}>
            <InvoiceEntry invoice={e} />
          </Link>
        ))}
      </InvoicesListContainer>
    </InvoicesContainer>
  );
};

export default InvoicesList;

const InvoicesContainer = styled.div`
  width: 730px;
  height: 80vh;
  margin: auto auto;
`;

const InvoicesHeader = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InvoicesTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  h2 {
    font-size: 32px;
  }
  p {
    color: ${(props) => props.theme.colors.secondaryLight};
    font-size: 12px;
  }
`;

const InvoicesListContainer = styled.div`
  width: 730px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
