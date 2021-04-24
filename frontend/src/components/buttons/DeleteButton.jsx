import React from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DeleteButton = ({ clickHandler }) => (
  <DeleteButtonContainer onClick={() => clickHandler()}>Delete</DeleteButtonContainer>
);

DeleteButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default DeleteButton;

const DeleteButtonContainer = styled.button`
  outline: none;
  cursor: pointer;
  width: 89px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: none;
  background: ${(props) => props.theme.colors.red};
`;
