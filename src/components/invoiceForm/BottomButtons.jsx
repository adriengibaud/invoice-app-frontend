import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/buttons/Button';

const BottomButtons = ({ purpose, saveInvoice }) => (
  <Container>
    <LeftContainer>
      {purpose === 'createInvoice' && <Button text="Discard" color="red" />}
    </LeftContainer>
    <RightContainer prupose={purpose}>
      {purpose === 'createInvoice' ? (
        <>
          <Button
            text="Save as Draft"
            clickHandler={() => saveInvoice('draft')}
            color="primaryLight"
          />
          <Button text="Save & Send" clickHandler={() => saveInvoice()} color="primary" />
        </>
      ) : (
        <>
          <Button text="Cancel" color="white" />
          <Button text="Save Changes" color="primary" clickHandler={() => saveInvoice()} />
        </>
      )}
    </RightContainer>
  </Container>
);

BottomButtons.propTypes = {
  purpose: PropTypes.string.isRequired,
  saveInvoice: PropTypes.func.isRequired,
};

export default BottomButtons;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    justify-content: flex-end;
    align-items: center;
  }
`;
