import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ color, text, clickHandler }) => (
  <Container onClick={clickHandler} color={color}>
    {text}
  </Container>
);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;

const Container = styled.button`
  padding: 13px;
  min-width: 70px;
  border: none;
  background: ${(props) =>
    (props.color === 'primary' && props.theme.colors.primary) ||
    (props.color === 'primaryLight' && props.theme.colors.primaryLight) ||
    (props.color === 'secondary' && props.theme.colors.secondary) ||
    (props.color === 'white' && props.theme.colors.white) ||
    (props.color === 'red' && props.theme.colors.red) ||
    props.color};
  border-radius: 24px;
  cursor: pointer;
  font-size: 15px;
  color: white;
  letter-spacing: -0.25px;
`;
