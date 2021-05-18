import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NewInvoiceButton from 'components/buttons/NewInvoiceButton';
import { selectInvoices, fetchInvoiceByUserId } from 'reducers/invoicesSlice';
import CreateInvoice from 'components/Invoice/CreateInvoice';
import { selectUserId } from 'reducers/userSlice';
import InvoiceListEntry from '../components/InvoicesList/InvoiceListEntry';

const InvoicesList = () => {
  const dispatch = useDispatch();
  const invoicesData = useSelector(selectInvoices);
  const userId = useSelector(selectUserId);
  const [newInvoice, setNewInvoice] = useState(false);

  const subCount = () => {
    if (invoicesData === null) return 'There is no invoice';
    switch (invoicesData.length) {
      case 0:
        return 'There is no invoice';
      case 1:
        return 'There is one invoice';
      default:
        return `There are ${invoicesData.length} total invoices`;
    }
  };

  const toggleCreatingInvoice = () => setNewInvoice(true);
  const closeCreatingInvoice = () => setNewInvoice(false);

  useEffect(() => {
    if (invoicesData.length === 0) dispatch(fetchInvoiceByUserId(userId));
  }, []);

  return (
    <>
      {newInvoice && <CreateInvoice closeCreatingInvoice={closeCreatingInvoice} />}

      <InvoicesContainer>
        <InvoicesHeader>
          <InvoicesTitle>
            <h2>Invoices</h2>
            <p>{subCount()}</p>
          </InvoicesTitle>
          <NewInvoiceButton clickHandler={() => toggleCreatingInvoice} />
        </InvoicesHeader>
        {invoicesData !== null ? (
          <InvoicesListContainer>
            {invoicesData.map((e) => (
              <Link key={e.id} style={{ textDecoration: 'none' }} to={`/invoice/${e.id}`}>
                <InvoiceListEntry invoice={e} />
              </Link>
            ))}
          </InvoicesListContainer>
        ) : (
          <h1>No invoices</h1>
        )}
      </InvoicesContainer>
    </>
  );
};

export default InvoicesList;

const InvoicesContainer = styled.div`
  width: 730px;
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 85vh;
  @media screen and (max-width: 800px) {
    width: 650px;
    height: 80vh;
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
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
