import React from 'react';
import styled from 'styled-components';

const EditButton = () => <EditButtonContainer>Edit</EditButtonContainer>;

export default EditButton;

const EditButtonContainer = styled.button`
  width: 73px;
  height: 48px;
  border-radius: 24px;
  border: none;
  background: ${(props) => props.theme.colors.secondaryLight};
  color: white;
  outline: none;
  cursor: pointer;
`;
