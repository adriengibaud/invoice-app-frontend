import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Login = () => {
  const handleSignIn = () => {
    auth.signInWithPopup(provider);
  };

  return <LoginButton onClick={handleSignIn}>Sign in with google</LoginButton>;
};

export default Login;

const LoginButton = styled.button`
  width: 250px;
`;
