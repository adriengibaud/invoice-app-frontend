/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import deleteIcon from 'assets/icon-delete.svg';
import 'react-datepicker/dist/react-datepicker.css';
import AddItemButton from 'components/buttons/AddItemButton';

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
    console.log('je submit');
  };

  const addItem = () => {
    console.log(uuidv4());
    const blankItem = {
      id: uuidv4(),
      name: '',
      city: '',
      postCode: '',
      country: '',
    };
    return setItems([...items, blankItem]);
  };

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
        <h3>Bill to</h3>
        <FullSizeEntry numberPerLine="one">
          <label>Client's name</label>
          <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </FullSizeEntry>
        <FullSizeEntry numberPerLine="one">
          <label>Client's email</label>
          <input type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
        </FullSizeEntry>
        <FullSizeEntry numberPerLine="one">
          <label>Street Address</label>
          <input
            type="text"
            value={clientAddress.street}
            onChange={(e) => setClientAddress({ ...clientAddress, street: e.target.value })}
          />
        </FullSizeEntry>
        <FullSizeEntry numberPerLine="three">
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
        </FullSizeEntry>
      </FormPart>
      <FormPart>
        <FullSizeEntry numberPerLine={select === 'custom' ? 'three' : 'two'}>
          <div className="container">
            <label>Invoice Date</label>
            <DatePicker
              className="date"
              selected={createdAt}
              dateFormat="yyyy/MM/dd"
              onChange={(date) => setCreatedAt(date)}
            />
          </div>
          <div className="container">
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
          {select === 'custom' && (
            <div className="container">
              <label>Payment Due</label>
              <DatePicker
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                  },
                }}
                selected={paymentDue}
                onChange={(date) => setPaymentDue(date)}
              />
            </div>
          )}
        </FullSizeEntry>
      </FormPart>
      <FormPart>
        <h3>Item List</h3>
        {items.length > 0 && (
          <ItemEntry>
            <ItemInfo label info="itemName">
              Item Name
            </ItemInfo>
            <ItemInfo label info="qty">
              Qty.
            </ItemInfo>
            <ItemInfo label info="price">
              Price
            </ItemInfo>
            <ItemInfo label info="total">
              Total
            </ItemInfo>
            <ItemInfo info="bin" />
          </ItemEntry>
        )}
        {items.length > 0 &&
          items.map((e) => {
            return (
              <ItemEntry>
                <ItemInfo info="itemName">
                  <input
                    value={e.name}
                    onChange={(p) =>
                      setItems(() => {
                        const itemsCopy = [...items];
                        const index = itemsCopy.findIndex((r) => r.id === e.id);
                        const item = { ...itemsCopy[index] };
                        item.name = p.target.value;
                        itemsCopy[index] = item;
                        return itemsCopy;
                      })
                    }
                  />
                </ItemInfo>
                <ItemInfo info="qty">
                  <input
                    value={e.quantity}
                    onChange={(p) =>
                      setItems(() => {
                        const itemsCopy = [...items];
                        const index = itemsCopy.findIndex((r) => r.id === e.id);
                        const item = { ...itemsCopy[index] };
                        item.quantity = p.target.value;
                        itemsCopy[index] = item;
                        return itemsCopy;
                      })
                    }
                  />
                </ItemInfo>
                <ItemInfo info="price">
                  <input
                    value={e.price}
                    onChange={(p) =>
                      setItems(() => {
                        const itemsCopy = [...items];
                        const index = itemsCopy.findIndex((r) => r.id === e.id);
                        const item = { ...itemsCopy[index] };
                        item.price = p.target.value;
                        itemsCopy[index] = item;
                        return itemsCopy;
                      })
                    }
                  />
                </ItemInfo>
                <ItemInfo info="total">
                  {e.quantity * e.price > 0 ? e.quantity * e.price : 0}
                </ItemInfo>
                <ItemInfo info="bin" onClick={() => setItems(items.filter((r) => r.id !== e.id))}>
                  <img src={deleteIcon} alt="" />
                </ItemInfo>
              </ItemEntry>
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
    display: block;
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
    input,
    select {
      width: 100%;
    }
  }
`;

const ItemsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemEntry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 20px;
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
