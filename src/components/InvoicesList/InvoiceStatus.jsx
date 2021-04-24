import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'utils/stringManipulation';

const InvoiceStatus = ({ status }) => (
  <InvoiceStatusContainer status={status}>
    <h1>·</h1>
    <p>{capitalizeFirstLetter(status)}</p>
  </InvoiceStatusContainer>
);

InvoiceStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default InvoiceStatus;

const changeBgColor = (status) => {
  if (status === 'paid') return 'rgb(51, 214, 159, 0.0571)';
  if (status === 'pending') return 'rgb(255, 143, 0, 0.0571)';
  return 'rgb(151, 151, 151, 0.0571)';
};

const changeTextColor = (status) => {
  if (status === 'paid') return 'rgb(51, 214, 159)';
  if (status === 'pending') return 'rgb(255, 143, 0)';
  return 'rgb(151, 151, 151)';
};

const InvoiceStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 40px;
  background: ${(props) => changeBgColor(props.status)};
  color: ${(props) => changeTextColor(props.status)};
  border-radius: 8px;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 15px;
  }
`;
