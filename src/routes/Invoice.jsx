/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectInvoices, deleteInvoice, setInvoicePaid } from 'reducers/invoicesSlice';
import { useParams, useHistory } from 'react-router-dom';
import BackButton from 'components/buttons/BackButton';
import EditButton from 'components/buttons/EditButton';
import DeleteButton from 'components/buttons/DeleteButton';
import CancelButton from 'components/buttons/CancelButton';
import MarkAsPaidButton from 'components/buttons/MarkAsPaidButton';
import EditInvoice from 'components/Invoice/EditInvoice';
import InvoiceStatus from 'components/InvoicesList/InvoiceStatus';
import InvoiceInfos from '../components/Invoice/InvoiceInfos';
import InvoiceItemsList from '../components/Invoice/InvoiceItemsList';

const Invoice = () => {
  const dispatch = useDispatch();
  const invoicesData = useSelector(selectInvoices);
  const { id } = useParams();
  const invoice = invoicesData.find((n) => n.id === id);
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [confirm, setConfirm] = useState(false);
  const [edit, setEdit] = useState(false);

  const openModal = () => setConfirm(true);
  const closeModal = () => setConfirm(false);

  const deleteHandler = () => {
    dispatch(deleteInvoice({ id: invoice.id }));
    history.push('/invoice');
  };

  return (
    <>
      {edit && <EditInvoice closeCreatingInvoice={() => setEdit(false)} data={invoice} />}
      {invoice ? (
        <>
          <Modal open={confirm} onClick={() => closeModal()}>
            <div className="body" onClick={(e) => e.stopPropagation()}>
              <h3>Confirm Deletion</h3>
              <p>Are you sure you want to delete invoice #{id}? This action cannot be undone.</p>
              <div className="buttons-container">
                <CancelButton toggleModal={closeModal} />
                <DeleteButton clickHandler={deleteHandler} />
              </div>
            </div>
          </Modal>
          <InvoiceContainer>
            <BackButton clickHandler={() => history.goBack()} />
            <TopContainer>
              <StatusContainer>
                <p>Status</p>
                <InvoiceStatus status={invoice.status} />
              </StatusContainer>
              <TopActionContainer>
                <EditButton openEdit={() => setEdit(true)} />
                <DeleteButton clickHandler={openModal} />
                <MarkAsPaidButton clickHandler={() => dispatch(setInvoicePaid(invoice))} />
              </TopActionContainer>
            </TopContainer>
            <InfosContainer>
              <InvoiceInfos invoice={invoice} />
              <InvoiceItemsList invoiceItems={invoice.items} total={invoice.total} />
            </InfosContainer>
          </InvoiceContainer>
          <BottomActionContainer>
            <Actions>
              <EditButton />
              <DeleteButton />
              <MarkAsPaidButton />
            </Actions>
          </BottomActionContainer>
        </>
      ) : (
        <div>404</div>
      )}
    </>
  );
};

export default Invoice;

const Modal = styled.div`
  display: ${(props) => (props.open === true ? 'flex' : 'none')};
  justify-content: center;
  position: absolute;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  background: rgba(45, 45, 45, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  .body {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    height: 250px;
    background: white;
    margin: auto;
    border-radius: 8px;
    h3 {
      font-size: 25px;
    }
  }
  .buttons-container {
    width: 190px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: auto;
  }
`;

const InvoiceContainer = styled.div`
  width: 730px;
  margin: 3vh auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 800px) {
    width: 650px;
  }
  @media screen and (max-width: 670px) {
    width: 330px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 8px;
  -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  padding: 0 35px;
  @media screen and (max-width: 670px) {
    padding: 0 25px;
  }
`;

const StatusContainer = styled.div`
  width: 170px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  @media screen and (max-width: 670px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const TopActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const InfosContainer = styled.div`
  width: 100%;
  height: 631px;
  background: white;
  border-radius: 8px;
  -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  padding: 35px;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 670px) {
    padding: 25px;
    height: 700px;
  }
`;

const BottomActionContainer = styled.div`
  height: 91px;
  width: 100%;
  background: white;
  display: none;
  padding: 25px;
  @media screen and (max-width: 670px) {
    display: inline;
  }
`;

const Actions = styled.div`
  margin: auto;
  width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
