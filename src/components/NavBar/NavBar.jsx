import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';
import styled from 'styled-components';
import Auth from 'components/auth/Auth';

const NavBar = () => (
  <Container>
    <Link to="/">
      <LogoContainer>
        <img src={logo} alt="" />

        <BackgroundSplit />
      </LogoContainer>
    </Link>
    <Auth />
  </Container>
);

export default NavBar;

const Container = styled.div`
  width: 100px;
  height: 100vh;
  background: ${(props) => props.theme.colors.secondaryLight};
  border-radius: 0 25px 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    height: 80px;
    width: 100vw;
    border-radius: 0;
    flex-direction: row;
  }
`;

const LogoContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 100px;
  width: 100px;
  border-radius: 0 25px 25px 0;
  z-index: 0;
  img {
    width: 40px;
    position: absolute;
    z-index: 3;
    top: 30px;
    left: 30px;
    transition: 1s;
  }
  :hover {
    img {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 900px) {
    height: 80px;
    width: 80px;
    img {
      width: 30px;
      top: 25px;
      left: 25px;
    }
  }
`;

const BackgroundSplit = styled.div`
  height: 50px;
  background: ${(props) => props.theme.colors.primaryLight};
  position: relative;
  border-radius: 25px 0 25px 0;
  top: 50px;
  @media screen and (max-width: 900px) {
    height: 40px;
    top: 40px;
  }
`;
