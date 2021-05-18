/* eslint-disable  */
import React from 'react';
import { useDispatch } from 'react-redux';
import { createInvoice, saveInvoice } from 'reducers/invoicesSlice';
import styled from 'styled-components';
import invoiceSchema from 'data/invoiceSchema';
import InvoiceForm from '../invoiceForm/InvoiceForm';

const CreateInvoice = ({ closeCreatingInvoice, data }) => {
  const dispatch = useDispatch();
  const pushInvoice = (data) => {
    dispatch(createInvoice(data));
  };
  return (
    <Background onClick={() => closeCreatingInvoice()}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <InvoiceForm
          closeCreatingInvoice={() => closeCreatingInvoice()}
          invoiceData={data ? data : invoiceSchema}
          savingInvoice={(e) => {
            pushInvoice(e);
            closeCreatingInvoice();
          }}
          purpose="createInvoice"
        />
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
  @media screen and (max-width: 600px) {
  }
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
  @media screen and (max-width: 900px) {
    position: relative;
    padding: 30px;
    height: 90vh;
    margin-top: 80px;
  }
  @media screen and (max-width: 600px) {
    width: 100vw;
    border-radius: 0;
    height: auto;
  }
`;
