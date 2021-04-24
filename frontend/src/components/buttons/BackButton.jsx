import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BackButton = ({ clickHandler }) => (
  <BackButtonContainer onClick={() => clickHandler()}>
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.342.886L2.114 5.114l4.228 4.228"
        stroke="#0c9880"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
    <p>Go back</p>
  </BackButtonContainer>
);

BackButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default BackButton;

const BackButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  background: none;
  width: 83px;
  height: 17px;
  font-size: 15px;
  border: none;
  align-items: center;
  gap: 10px;
  outline: none;
  cursor: pointer;
  p {
    color: ${(props) => props.theme.colors.secondaryLight};
  }
`;
