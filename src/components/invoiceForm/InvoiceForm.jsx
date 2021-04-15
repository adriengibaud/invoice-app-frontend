/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import AddItemButton from 'components/buttons/AddItemButton';
import ItemList from './ItemList';
import InvoiceDateSelector from './InvoiceDateSelector';
import Input from './Input';

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

  /* useEffect(() => {
    setTotal(items.map((e) => e.total).reduce((a, b) => a + b, 0));
  }, [items]);
*/

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
  };

  const addItem = () => {
    const blankItem = {
      id: uuidv4(),
      name: '',
      quantity: '',
      price: '',
      total: '',
    };
    return setItems([...items, blankItem]);
  };

  const modifyItem = (type, data, value) => {
    const itemsCopy = [...items];
    const index = itemsCopy.findIndex((r) => r.id === data.id);
    const item = { ...itemsCopy[index] };
    if (type === 'itemName') item.name = value;

    if (type === 'qty' && value >= 0) {
      item.quantity = value;
      item.total = value * item.price;
      console.log(value);
      console.log(item.total);
    }

    if (type === 'price' && value >= 0) {
      item.price = value;
      item.total = value * item.quantity;
    }
    if (type === 'total') item.price = value;
    itemsCopy[index] = item;
    setItems(itemsCopy);
  };

  const deleteItem = (item) => setItems(items.filter((e) => e.id !== item));

  return (
    <FormContainer onSubmit={submitForm}>
      <h1>New Invoice</h1>
      <FormPart>
        <h3>Bill From</h3>
        <FullSizeEntry numberPerLine="one">
          <label>Street Address</label>
          <input
            type="text"
            value={senderAddress.street}
            onChange={(e) => setSenderAddress({ ...senderAddress, street: e.target.value })}
          />
        </FullSizeEntry>
        <FullSizeEntry numberPerLine="three">
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
        </FullSizeEntry>
      </FormPart>
      <FormPart>
        <h3>Bill To</h3>
        <FullSizeEntry numberPerLine="one">
          <Input
            data={clientName}
            clickHandler={(name) => setClientName(name)}
            text="Client's Name"
          />
          <Input
            data={clientEmail}
            clickHandler={(email) => setClientEmail}
            text="Client's Email"
          />
          <Input
            data={clientAddress.street}
            clickHandler={(street) => setClientAddress({ ...clientAddress, street })}
            text="Street Address"
          />
        </FullSizeEntry>
        <FullSizeEntry numberPerLine="three">
          <Input
            data={clientAddress.city}
            clickHandler={(city) => setClientAddress({ ...clientAddress, city })}
            text="City"
          />
          <Input
            data={clientAddress.postCode}
            clickHandler={(postCode) => setClientAddress({ ...clientAddress, postCode })}
            text="Post Code"
          />
          <Input
            data={clientAddress.country}
            clickHandler={(country) => setClientAddress({ ...clientAddress, country })}
            text="Country"
          />
        </FullSizeEntry>
      </FormPart>
      <FormPart>
        <FullSizeEntry numberPerLine={select === 'custom' ? 'three' : 'two'}>
          <InvoiceDateSelector
            createdAt={createdAt}
            invoiceDateHandler={(date) => setCreatedAt(date)}
            handleSelectChange={(term) => setSelect(term)}
            select={select}
            paymentDue={paymentDue}
            paymentDueHandler={(date) => setPaymentDue(date)}
          />
        </FullSizeEntry>
      </FormPart>
      <FormPart>
        <h3>Item List</h3>
        {items.length > 0 &&
          items.map((e, i) => {
            return (
              <ItemList
                key={e.id}
                position={i}
                data={e}
                handleDelete={(item) => deleteItem(item)}
                modifyItem={(type, data, value) => modifyItem(type, data, value)}
              />
            );
          })}
        <AddItemButton margin="20px" clickHandler={() => addItem} />
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
    margin-bottom: 10px;
  }
  input,
  select {
    width: 100%;
    height: 40px;
    border: 1px solid #0c9880;
    border-radius: 5px;
    padding: 6px;
  }
  .label {
    margin-bottom: 10px;
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
  flex-direction: ${(props) => (props.numberPerLine === 'one' ? 'column' : 'row')};
  width: 100%;
  justify-content: space-between;
  .container {
    width: ${({ numberPerLine }) =>
      (numberPerLine === 'three' && '30%') ||
      (numberPerLine === 'two' && '45%') ||
      (numberPerLine === 'one' && '100%')};
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    input,
    select {
      width: 100%;
    }
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ info }) =>
    (info === 'itemName' && 'flex-start') ||
    (info === 'qty' && 'center') ||
    (info === 'price' && 'flex-start') ||
    (info === 'total' && 'flex-end')};
  width: ${({ label, info }) =>
    (info === 'itemName' && '35%') ||
    (info === 'qty' && '10%') ||
    (info === 'price' && '17%') ||
    (info === 'total' && '17%') ||
    (info === 'bin' && '5%')};
  img {
    width: 80%;
  }
`;
