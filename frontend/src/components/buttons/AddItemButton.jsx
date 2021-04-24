import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddItemButton = ({ margin, clickHandler }) => (
  <ButtonContainer margin={margin} onClick={clickHandler()}>
    + Add New Item
  </ButtonContainer>
);

AddItemButton.propTypes = {
  margin: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default AddItemButton;

const ButtonContainer = styled.button`
  width: 100%;
  height: 48px;
  background: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 24px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: ${({ margin }) => margin || '0px'};
  :focus {
    outline: 0;
  }
`;
