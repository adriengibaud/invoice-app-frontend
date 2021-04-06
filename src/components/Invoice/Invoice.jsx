import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackButton from 'components/buttons/BackButton';
import EditButton from 'components/buttons/EditButton';
import DeleteButton from 'components/buttons/DeleteButton';
import MarkAsPaidButton from 'components/buttons/MarkAsPaidButton';
import InvoiceStatus from '../InvoicesList/InvoiceStatus';
import InvoiceInfos from './InvoiceInfos';
import InvoiceItemsList from './InvoiceItemsList';

const Invoice = () => {
  const invoicesData = useSelector(({ invoices }) => invoices);
  const { id } = useParams();
  const invoice = invoicesData.find((n) => n.id === id);

  return (
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
  );
};

export default Invoice;

const InvoiceContainer = styled.div`
  width: 730px;
  margin: 3vh auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
`;

const StatusContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const TopActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
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
`;
