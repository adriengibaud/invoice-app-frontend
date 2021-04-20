import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MarkAsPaidButton = ({ clickHandler }) => (
  <MarkAsPaidButtonContainer onClick={() => clickHandler()}>Mark as Paid</MarkAsPaidButtonContainer>
);

MarkAsPaidButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default MarkAsPaidButton;

const MarkAsPaidButtonContainer = styled.button`
  width: 131px;
  height: 48px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  -webkit-tap-highlight-color: transparent;
`;
