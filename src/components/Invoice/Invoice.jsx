import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectInvoices } from 'reducers/invoicesSlice';
import { useParams } from 'react-router-dom';
import BackButton from 'components/buttons/BackButton';
import EditButton from 'components/buttons/EditButton';
import DeleteButton from 'components/buttons/DeleteButton';
import MarkAsPaidButton from 'components/buttons/MarkAsPaidButton';
import InvoiceStatus from '../InvoicesList/InvoiceStatus';
import InvoiceInfos from './InvoiceInfos';
import InvoiceItemsList from './InvoiceItemsList';

const Invoice = () => {
  const invoicesData = useSelector(selectInvoices);
  const { id } = useParams();
  const invoice = invoicesData.find((n) => n.id === id);

  return (
    <>
      <InvoiceContainer>
        <BackButton />
        <TopContainer>
          <StatusContainer>
            <p>Status</p>
            <InvoiceStatus status={invoice.status} />
          </StatusContainer>
          <TopActionContainer>
            <EditButton />
            <DeleteButton />
            <MarkAsPaidButton />
          </TopActionContainer>
        </TopContainer>
        <InfosContainer>
          <InvoiceInfos invoice={invoice} />
          <InvoiceItemsList invoiceItems={invoice.items} total={invoice.total} />
        </InfosContainer>
      </InvoiceContainer>
      <BottomActionContainer>
        <Actions>
          <EditButton />
          <DeleteButton />
          <MarkAsPaidButton />
        </Actions>
      </BottomActionContainer>
    </>
  );
};

export default Invoice;

const InvoiceContainer = styled.div`
  width: 730px;
  margin: 3vh auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 800px) {
    width: 650px;
  }
  @media screen and (max-width: 670px) {
    width: 330px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 8px;
  -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  padding: 0 35px;
  @media screen and (max-width: 670px) {
    padding: 0 25px;
  }
`;

const StatusContainer = styled.div`
  width: 170px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  @media screen and (max-width: 670px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const TopActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const InfosContainer = styled.div`
  width: 100%;
  height: 631px;
  background: white;
  border-radius: 8px;
  -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  padding: 35px;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 670px) {
    padding: 25px;
    height: 700px;
  }
`;

const BottomActionContainer = styled.div`
  height: 91px;
  width: 100%;
  background: white;
  display: none;
  padding 25px;
  @media screen and (max-width: 670px) {
    display: inline;
  }
`;

const Actions = styled.div`
  margin: auto;
  width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
