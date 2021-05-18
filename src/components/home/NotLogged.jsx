/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const NotLogged = () => {
  return <Container>Log in with Google</Container>;
};

export default NotLogged;

const Container = styled.button`
  padding: 13px;

  border: none;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 24px;
  cursor: pointer;
  font-size: 15px;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: -0.25px;
`;
