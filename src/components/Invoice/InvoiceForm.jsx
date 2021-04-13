/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const InvoiceForm = ({ invoiceData }) => {
  const [id, setId] = useState(invoiceData.id);
  const [description, setDescription] = useState(invoiceData.description);
  const [createdAt, setCreatedAt] = useState(invoiceData.createdAt);
  const [paymentDue, setPaymentDue] = useState(invoiceData.paymentDue);
  const [clientName, setClientName] = useState(invoiceData.clientName);
  const [clientEmail, setClientEmail] = useState(invoiceData.clientEmail);
  const [clientAddress, setClientAddress] = useState(invoiceData.clientAddress);
  const [senderAddress, setSenderAddress] = useState(invoiceData.senderAddress);
  const [items, setItems] = useState(invoiceData.items);
  const [total, setTotal] = useState(invoiceData.total);
  const [select, setSelect] = useState('30day');

  useEffect(() => {
    setTotal(items.map((e) => e.total).reduce((a, b) => a + b, 0));
  }, [items]);

  useEffect(() => {
    if (select !== 'custom' && createdAt !== '') {
      setPaymentDue(`je rajoute ${select} jours`);
      console.log(paymentDue);
    } else {
      console.log('je ne fais rien lol');
    }
  }, [select, createdAt]);

  const submitForm = (event) => {
    event.preventDefault();
    console.log('je submit');
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <h1>New Invoice</h1>
      <FormPart>
        <h3>Bill From</h3>
        <FullSizeEntry>
          <label>Street Address</label>
          <input
            type="text"
            value={senderAddress.street}
            onChange={(e) => setSenderAddress({ ...senderAddress, street: e.target.value })}
          />
        </FullSizeEntry>
        <SmallSizeEntry>
          <div className="container">
            <label>City</label>
            <input
              type="text"
              value={senderAddress.city}
              onChange={(e) => setSenderAddress({ ...senderAddress, city: e.target.value })}
            />
          </div>
          <div className="container">
            <label>Post Code</label>
            <input
              type="text"
              value={senderAddress.postCode}
              onChange={(e) => setSenderAddress({ ...senderAddress, postCode: e.target.value })}
            />
          </div>
          <div className="container">
            <label>Country</label>
            <input
              type="text"
              value={senderAddress.country}
              onChange={(e) => setSenderAddress({ ...senderAddress, country: e.target.value })}
            />
          </div>
        </SmallSizeEntry>
      </FormPart>
      <FormPart>
        <h3>Bill to</h3>
        <FullSizeEntry>
          <label>Client's name</label>
          <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </FullSizeEntry>
        <FullSizeEntry>
          <label>Client's email</label>
          <input type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
        </FullSizeEntry>
        <FullSizeEntry>
          <label>Street Address</label>
          <input
            type="text"
            value={clientAddress.street}
            onChange={(e) => setClientAddress({ ...clientAddress, street: e.target.value })}
          />
        </FullSizeEntry>
        <SmallSizeEntry>
          <div className="container">
            <label>City</label>
            <input
              type="text"
              value={clientAddress.city}
              onChange={(e) => setClientAddress({ ...clientAddress, city: e.target.value })}
            />
          </div>
          <div className="container">
            <label>Post Code</label>
            <input
              type="text"
              value={clientAddress.postCode}
              onChange={(e) => setClientAddress({ ...clientAddress, postCode: e.target.value })}
            />
          </div>
          <div className="container">
            <label>Country</label>
            <input
              type="text"
              value={clientAddress.coutry}
              onChange={(e) => setClientAddress({ ...clientAddress, country: e.target.value })}
            />
          </div>
        </SmallSizeEntry>
      </FormPart>
      <FormPart>
        <SmallSizeEntry>
          <div className="mediumContainer">
            <label>Invoice Date</label>
            <DatePicker
              className="date"
              selected={createdAt}
              dateFormat="yyyy/MM/dd"
              onChange={(date) => setCreatedAt(date)}
            />
          </div>
          <div className="mediumContainer">
            <label>Payment Terms</label>
            <select onChange={(e) => setSelect(e.target.value)}>
              <option value="30">30 Days</option>
              <option value="60">60 Days</option>
              <option value="90">90 Days</option>
              <option value="180">180 Days</option>
              <option value="365">A Year</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          {select === 'custom' && <div className="mediumContainer">coucou</div>}
        </SmallSizeEntry>
      </FormPart>
    </FormContainer>
  );
};

InvoiceForm.propTypes = {
  invoiceData: PropTypes.shape({
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
    items: PropTypes.shape([
      {
        name: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.number,
        total: PropTypes.number,
      },
    ]),
    total: PropTypes.number,
  }).isRequired,
};

export default InvoiceForm;

const FormContainer = styled.form`
  label {
    display: block;
    margin-bottom: 10px;
  }
  input,
  select {
    height: 40px;
    border: 1px solid #0c9880;
    border-radius: 5px;
    padding: 6px;
  }
`;

const FormPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  h3 {
    font-size: 16px;
  }
`;

const FullSizeEntry = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallSizeEntry = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  .container {
    width: 30%;
    input {
      width: 100%;
    }
  }
  .mediumContainer {
    width: 45%;
    input,
    select {
      width: 100%;
      display: flex;
      flex-direction: row;
    }
  }
`;
