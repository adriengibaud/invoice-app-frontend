import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InvoiceInfos = ({ invoice }) => (
  <Infos>
    <div className="id-desc">
      <h5>#{invoice.id}</h5>
      <p>{invoice.description}</p>
    </div>
    <div className="senderAddress">
      <p>{invoice.senderAddress.street && invoice.senderAddress.street}</p>
      <p>{invoice.senderAddress.city && invoice.senderAddress.city}</p>
      <p>{invoice.senderAddress.postCode && invoice.senderAddress.postCode}</p>
      <p>{invoice.senderAddress.country && invoice.senderAddress.country}</p>
    </div>
    <div className="leftPanel">
      <div className="invoiceDate">
        <p>Invoice Date</p>
        <h5>{invoice.createdAt}</h5>
      </div>
      <div className="paymentDue">
        <p>Payment Due</p>
        <h5>{invoice.paymentDue}</h5>
      </div>
    </div>
    <div className="billTo">
      <p>Bill To</p>
      <h5>{invoice.clientName}</h5>
      <div className="address">
        <p>{invoice.clientAddress.street && invoice.clientAddress.street}</p>
        <p>{invoice.clientAddress.city && invoice.clientAddress.city}</p>
        <p>{invoice.clientAddress.postCode && invoice.clientAddress.postCode}</p>
        <p>{invoice.clientAddress.country && invoice.clientAddress.country}</p>
      </div>
    </div>
    <div className="sentTo">
      <p>Sent to</p>
      <h5>{invoice.clientEmail}</h5>
    </div>
  </Infos>
);

InvoiceInfos.propTypes = {
  invoice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    paymentDue: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientEmail: PropTypes.string,
    clientAddress: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      postCode: PropTypes.string,
      country: PropTypes.string,
    }),
    senderAddress: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      postCode: PropTypes.string,
      country: PropTypes.string,
    }),
  }).isRequired,
};

export default InvoiceInfos;

const Infos = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: 25% 35% 40%;
  grid-template-rows: 40% 43%;
  grid-template-areas:
    'id-desc . senderAddress'
    'leftPanel billTo sentTo';
  h5 {
    font-size: 16px;
    font-weight: 900;
  }
  p {
    font-size: 13px;
    color: ${(props) => props.theme.colors.secondaryLight};
  }
  .id-desc {
    grid-area: id-desc;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
      letter-spacing: -0.8px;
    }
  }
  .senderAddress {
    text-align: right;
    grid-area: senderAddress;
  }
  .invoiceDate {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .paymentDue {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .leftPanel {
    grid-area: leftPanel;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .billTo {
    display: flex;
    flex-direction: column;
    grid-area: billTo;
    justify-content: space-between;
    .address {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
  }
  .sentTo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    grid-area: sentTo;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 45% 55%;
    grid-template-rows: auto;
    height: 53%;
    row-gap: 20px;
    grid-template-areas:
      'id-desc id-desc'
      'senderAddress senderAddress'
      'leftPanel billTo'
      'sentTo sentTo';
    h5 {
      font-size: 15px;
    }
    .id-desc {
      gap: 5px;
      h5 {
        font-size: 12px;
      }
      p {
        font-size: 12px;
      }
    }
    .senderAddress {
      text-align: start;
      p {
        font-size: 11px;
      }
    }
    .sentTo {
      gap: 10px;
    }
    .billTo {
      gap: 12px;
    }
    .invoiceDate {
      gap: 12px;
    }
    .paymentDue {
      gap: 12px;
    }
  }
`;
