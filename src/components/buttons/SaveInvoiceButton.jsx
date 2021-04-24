import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SaveInvoiceButton = ({ text, clickHandler }) => (
  <ButtonContainer onClick={() => clickHandler()}>{text}</ButtonContainer>
);

SaveInvoiceButton.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default SaveInvoiceButton;

const ButtonContainer = styled.button``;
