import React from 'react';
import styled from 'styled-components';

const DeleteButton = () => <DeleteButtonContainer>Delete</DeleteButtonContainer>;

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
