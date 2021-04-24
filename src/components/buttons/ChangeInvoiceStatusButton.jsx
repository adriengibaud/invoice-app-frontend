import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChangeInvoiceStatusButton = ({ clickHandler, status }) => (
  <ButtonContainer status={status} onClick={() => clickHandler()}>
    {(status === 'pending' && 'Mark as Paid') ||
      (status === 'draft' && 'Set Active') ||
      (status === 'paid' && 'Mark as Pending')}
  </ButtonContainer>
);

ChangeInvoiceStatusButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default ChangeInvoiceStatusButton;

const ButtonContainer = styled.button`
  width: ${({ status }) =>
    (status === 'pending' && '131px') ||
    (status === 'draft' && '120px') ||
    (status === 'paid' && '145px')};
  height: 48px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  -webkit-tap-highlight-color: transparent;
`;
