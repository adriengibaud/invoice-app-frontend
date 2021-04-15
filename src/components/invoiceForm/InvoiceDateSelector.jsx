/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InvoiceDateSelector = ({
  invoiceDateHandler,
  createdAt,
  handleSelectChange,
  select,
  paymentDueHandler,
  paymentDue,
}) => (
  <>
    <div className="container">
      <label htmlFor="invoiceDate">
        <p className="label">Invoice Date</p>
        <DatePicker
          className="date"
          selected={createdAt}
          dateFormat="yyyy/MM/dd"
          onChange={(date) => invoiceDateHandler(date)}
        />
      </label>
    </div>
    <div className="container">
      <label htmlFor="paymentTerms">
        <p className="label">Payment Terms</p>
        <select onChange={(e) => handleSelectChange(e.target.value)}>
          <option value="30">30 Days</option>
          <option value="60">60 Days</option>
          <option value="90">90 Days</option>
          <option value="180">180 Days</option>
          <option value="365">A Year</option>
          <option value="custom">Custom</option>
        </select>
      </label>
    </div>
    {select === 'custom' && (
      <div className="container">
        <label htmlFor="paymentDue">
          <p className="label">Payment Due</p>
          <DatePicker
            popperModifiers={{
              preventOverflow: {
                enabled: true,
              },
            }}
            selected={paymentDue}
            onChange={(date) => paymentDueHandler(date)}
          />
        </label>
      </div>
    )}
  </>
);

export default InvoiceDateSelector;
