import React from 'react';
import styled from 'styled-components';

const Button = () => (
  <ButtonContainer>
    <PlusContainer>
      <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fill="#0c9880"
          fillRule="nonzero"
        />
      </svg>
    </PlusContainer>
    <p className="completeText">New Invoice</p>
    <p className="reducedText">New</p>
  </ButtonContainer>
);

export default Button;

const ButtonContainer = styled.button`
  width: 150px;
  height: 48px;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  .reducedText {
    display: none;
  }
  p {
    font-size: 15px;
    font-weight: normal;
    margin-right: 8px;
    color: ${(props) => props.theme.colors.white};
    letter-spacing: -0.25px;
  }
  @media screen and (max-width: 670px) {
    width: 90px;
    .reducedText {
      display: inline;
    }
    .completeText {
      display: none;
    }
  }
`;
const PlusContainer = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;
