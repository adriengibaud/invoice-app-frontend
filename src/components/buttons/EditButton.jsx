import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const EditButton = ({ openEdit }) => (
  <EditButtonContainer onClick={openEdit}>Edit</EditButtonContainer>
);

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
