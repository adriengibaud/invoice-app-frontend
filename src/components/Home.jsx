import LoginButton from 'LoginButton';
import LogoutButton from 'LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div>home</div>
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
      {isLoading && <div>Loading...</div>}
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.nickname}</p>
          <p>{user.user_id}</p>
          <p>yo</p>
        </div>
      )}
    </>
  );
};

export default Home;
