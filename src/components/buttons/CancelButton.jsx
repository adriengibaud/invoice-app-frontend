import React from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CancelButton = ({ toggleModal }) => (
  <CancelButtonContainer onClick={() => toggleModal()}>Cancel</CancelButtonContainer>
);

CancelButton.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default CancelButton;

const CancelButtonContainer = styled.button`
  outline: none;
  cursor: pointer;
  width: 89px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: none;
  background: ${(props) => props.theme.colors.white};
`;
