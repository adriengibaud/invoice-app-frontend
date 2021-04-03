import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InvoiceEntry = ({ invoice }) => (
  <InvoiceBody>
    <p>{invoice.id}</p>
    <p>{invoice.clientName}</p>
  </InvoiceBody>
);

InvoiceEntry.propTypes = {
  invoice: PropTypes.string.isRequired,
};

export default InvoiceEntry;

const InvoiceBody = styled.div`
  width: 730px;
  height: 72px;
  display: flex;
  flex-direction: row;
`;
