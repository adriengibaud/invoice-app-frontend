import React from 'react';
import logo from 'assets/logo.svg';
import styled, { keyframes } from 'styled-components';

const NavBar = () => (
  <Container>
    <LogoContainer>
      <img src={logo} alt="" />

      <BackgroundSplit />
    </LogoContainer>
  </Container>
);

export default NavBar;

const Container = styled.div`
  width: 100px;
  height: 100vh;
  background: ${(props) => props.theme.colors.light};
`;

const rotate = keyframes`
   from {
     transform: rotate(0deg)
   }
   to {
     transform: rotate(360deg)
   }
`;

const LogoContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 100px;
  border-radius: 0 25px 25px 0;
  z-index: 0;
  img {
    width: 40px;
    position: absolute;
    z-index: 3;
    top: 30px;
    left: 30px;
  }
  :hover {
    img {
      animation: ${rotate} 1s linear;
    }
  }
`;

const BackgroundSplit = styled.div`
  height: 50px;
  background: ${(props) => props.theme.colors.primaryLight};
  position: relative;
  border-radius: 25px 0 25px 0;
  top: 50px;
`;
