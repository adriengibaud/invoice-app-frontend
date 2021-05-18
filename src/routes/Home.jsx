import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUserName } from 'reducers/userSlice';
import { useHistory } from 'react-router-dom';
import homeImage from 'assets/homeImage.png';
import Button from 'components/buttons/Button';
import { auth, provider } from '../firebase';

export const Home = () => {
  const userName = useSelector(selectUserName);
  const history = useHistory();

  const handleSignIn = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <HomeContainer>
      <HeaderContainer>
        <h1>Welcome to invoicerio</h1>
        <img src={homeImage} alt="" />
      </HeaderContainer>

      <ButtonContainer>
        {userName ? (
          <Button
            text="Show Invoices"
            color="primary"
            clickHandler={() => history.push('/invoice')}
          />
        ) : (
          <Button text="Log in with Google" color="primary" clickHandler={handleSignIn} />
        )}
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.header`
  width: 350px;
  height: 400px;
  margin: 5vh auto;
  h1 {
    font-size: 28px;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }
  img {
    margin-top: 5vh;
    width: 350px;
  }
`;

const ButtonContainer = styled.div`
  width: 350px;
  margin: 5vh auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
