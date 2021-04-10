import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NewInvoiceButton from 'components/buttons/NewInvoiceButton';
import { selectInvoices } from 'reducers/invoicesSlice';
import InvoiceListEntry from './InvoiceListEntry';

const InvoicesList = () => {
  const invoicesData = useSelector(selectInvoices);
  console.log(invoicesData);

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
            <InvoiceListEntry invoice={e} />
          </Link>
        ))}
      </InvoicesListContainer>
    </InvoicesContainer>
  );
};

export default InvoicesList;

const InvoicesContainer = styled.div`
  width: 730px;
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: 800px) {
    width: 650px;
  }
  @media screen and (max-width: 670px) {
    width: 90vw;
  }
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
  height: 100%;
  h2 {
    font-size: 32px;
  }
  p {
    color: ${(props) => props.theme.colors.secondaryLight};
    font-size: 12px;
  }
  @media screen and (max-width: 670px) {
    height: 50px;
    width: 100px;
    gap: 10px;
    h2 {
      font-size: 20px;
    }
  }
`;

const InvoicesListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
