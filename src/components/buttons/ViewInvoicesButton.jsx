import React from 'react';
import styled from 'styled-components';

const ViewInvoicesButton = () => <Container>View Invoices</Container>;

export default ViewInvoicesButton;

const Container = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  cursor: pointer;
`;
