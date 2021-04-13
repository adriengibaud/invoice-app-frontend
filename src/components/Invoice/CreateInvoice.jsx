/* eslint-disable  */
import React from 'react';
import styled from 'styled-components';
import invoiceSchema from 'data/invoiceSchema';
import InvoiceForm from './InvoiceForm';

const CreateInvoice = ({ closeCreatingInvoice }) => {
  return (
    <Background onClick={() => closeCreatingInvoice()}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <InvoiceForm invoiceData={invoiceSchema} />
      </FormContainer>
    </Background>
  );
};

export default CreateInvoice;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(45, 45, 45, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
`;

const FormContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 100vh;
  padding: 30px 30px 30px 130px;
  border-radius: 0 25px 25px 0;
  background: white;
  z-index: 2;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
