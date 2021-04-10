/* eslint-disable arrow-body-style */
import React from 'react';

const AuthButton = ({ userEmail }) => {
  return (
    <div>
      <img src={userEmail} alt="" />
    </div>
  );
};

import PropTypes from 'prop-types';

export default AuthButton;
