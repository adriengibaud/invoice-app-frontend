import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InvoiceStatus from './InvoiceStatus';

const InvoiceListEntry = ({ invoice }) => (
  <InvoiceBody>
    <p className="id">{invoice.id}</p>
    <p className="payment-due">Due {invoice.paymentDue}</p>
    <p className="client-name">{invoice.clientName}</p>
    <p className="total">€ {invoice.total}</p>
    <div className="status">
      <InvoiceStatus status={invoice.status} />
    </div>
    <svg className="svg" width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1l4 4-4 4" stroke="#0c9880" strokeWidth="2" fill="none" fillRule="evenodd" />
    </svg>
  </InvoiceBody>
);

InvoiceListEntry.propTypes = {
  invoice: PropTypes.string.isRequired,
};

export default InvoiceListEntry;

const InvoiceBody = styled.div`
  width: 730px;
  padding: 0 20px;
  height: 72px;
  display: grid;
  grid-template-columns: 100px 150px 160px 120px 124px 30px;
  grid-template-areas: 'id payment-due client-name total status svg';
  align-items: center;
  justify-items: start;
  background: white;
  border-radius: 8px;
  -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  .id {
    font-weight: 900;
    grid-area: id;
    color: #551a8b;
  }

  .payment-due {
    grid-area: payment-due;
    color: ${(props) => props.theme.colors.secondaryLight};
  }
  .client-name {
    grid-area: client-name;
    color: ${(props) => props.theme.colors.secondaryLight};
  }
  .total {
    grid-area: total;
    justify-self: end;
    font-weight: 900;
  }
  .status {
    grid-area: status;
    justify-self: end;
  }
  .svg {
    grid-area: svg;
    justify-self: end;
  }
  @media screen and (max-width: 800px) {
    width: 650px;
    grid-template-columns: 90px 150px 100px 120px 124px 30px;
  }
  @media screen and (max-width: 670px) {
    width: 90vw;
    height: 134px;
    padding: 20px;
    grid-template-columns: 50% 50%;
    grid-template-row: 50% 25% 25%;
    grid-template-areas:
      'id client-name'
      'payment-due status'
      'total status';
    .svg {
      display: none;
    }
    .client-name {
      justify-self: end;
    }
    .total {
      justify-self: start;
    }
  }
`;
