/* eslint-disable arrow-body-style */
import ViewInvoicesButton from 'components/buttons/ViewInvoicesButton';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoggedIn = () => {
  return (
    <Container>
      <Link to="/invoice">
        {' '}
        <ViewInvoicesButton />
      </Link>
    </Container>
  );
};

export default LoggedIn;

const Container = styled.div`
  margin: auto;
`;
