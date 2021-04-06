import React from 'react';
import styled from 'styled-components';

const MarkAsPaidButton = () => <MarkAsPaidButtonContainer>Mark as Paid</MarkAsPaidButtonContainer>;

export default MarkAsPaidButton;

const MarkAsPaidButtonContainer = styled.button`
  width: 131px;
  height: 48px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
`;
