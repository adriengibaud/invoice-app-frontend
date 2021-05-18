/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveUser,
  setUserLogoutState,
  selectUserEmail,
  selectUserName,
  selectUserImage,
} from 'reducers/userSlice';
import { cleanInvoice } from 'reducers/invoicesSlice';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';

const Auth = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userImage = useSelector(selectUserImage);
  const [openMenu, setOpenMenu] = useState(false);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then(() => setOpenMenu(false));
  };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogoutState());
      })
      .then(() => dispatch(cleanInvoice()));
  };

  useEffect(() => {
    if (userName === null) {
      auth.onAuthStateChanged((user) => {
        if (user !== null && userEmail === null) {
          dispatch(
            setActiveUser({
              userName: user.displayName,
              userEmail: user.email,
              userId: user.uid,
              userImage: user.photoURL,
            })
          );
        }
      });
    }
  }, []);

  const authContainer = useRef();

  const handleClick = (e) => {
    if (authContainer.current.contains(e.target)) {
      return setOpenMenu(true);
    }
    return setOpenMenu(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <AuthContainer ref={authContainer}>
      <div>
        {userName ? (
          <UserImage>
            {userImage ? <img src={userImage} alt="" /> : <AltImage>{userName[0]}</AltImage>}
            <LogoutMenu openMenu={openMenu} onClick={handleSignOut}>
              Log out
            </LogoutMenu>
          </UserImage>
        ) : (
          <LoginButton onClick={handleSignIn}>Sign in</LoginButton>
        )}
      </div>
    </AuthContainer>
  );
};

export default Auth;

const AuthContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    height: 80px;
    width: 80px;
    margin: 0 30px;
  }
`;

const AltImage = styled.div`
  width: 60%;
  height: 60%;
  background: red;
`;

const UserImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  img {
    border-radius: 50%;
    width: 60%;
  }
`;

const LoginButton = styled.button`
  width: 80px;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.white};
`;

const LogoutMenu = styled.div`
  display: ${(props) => (props.openMenu ? 'block' : 'none')};
  position: absolute;
  z-index: 100;
  background: ${(props) => props.theme.colors.white};
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;
