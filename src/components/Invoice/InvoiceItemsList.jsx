import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InvoiceItemsList = ({ invoiceItems, total }) => (
  <Container>
    <InvoiceItemsContainer>
      <HeaderGrid>
        <p className="itemName">Item Name</p>
        <p className="quantity">QTY</p>
        <p className="price">Price</p>
        <p className="total">Total</p>
      </HeaderGrid>
      {invoiceItems.map((e) => (
        <ItemLine>
          <p className="itemName">{e.name}</p>
          <p className="quantity">{e.quantity}</p>
          <p className="quantityPhone">
            {e.quantity} x {e.price}
          </p>
          <p className="price">{e.price}</p>
          <p className="total">{e.total}</p>
        </ItemLine>
      ))}
    </InvoiceItemsContainer>
    <AmountDueContainer>
      <p>Amount Due</p>
      <h5>{total}</h5>
    </AmountDueContainer>
  </Container>
);

InvoiceItemsList.propTypes = {
  invoiceItems: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default InvoiceItemsList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvoiceItemsContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px 8px 0 0;
  height: 184px;
  max-height: 184px;
  padding: 25px;
  color: ${(props) => props.theme.colors.secondaryLight};
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  gap: 25px;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 35% 15% 25% 25%;
  grid-template-areas: 'itemName quantity price total';
  .itemName {
    grid-area: itemName;
  }
  .quantity {
    justify-self: center;
    grid-area: quantity;
  }
  .price {
    justify-self: end;
    grid-area: price;
  }
  .total {
    justify-self: end;
    grid-area: total;
  }
  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const ItemLine = styled.div`
  display: grid;
  grid-template-columns: 35% 15% 25% 25%;
  grid-template-areas: 'itemName quantity price total';
  .itemName {
    grid-area: itemName;
    font-weight: 900;
    color: ${(props) => props.theme.colors.secondary};
  }
  .quantity {
    justify-self: center;
    grid-area: quantity;
  }
  .price {
    justify-self: end;
    grid-area: price;
  }
  .total {
    justify-self: end;
    grid-area: total;
    font-weight: 900;
    color: ${(props) => props.theme.colors.secondary};
  }
  .quantityPhone {
    display: none;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 60% 40%;
    grid-template-rows: 20px 20px;
    grid-template-areas:
      'itemName total'
      'quantityPhone total';
    p {
      font-size: 13px;
    }
    .price {
      display: none;
    }
    .quantity {
      display: none;
    }
    .quantityPhone {
      display: inline;
      grid-area: quantityPhone;
    }
    .total {
      justify-self: end;
      align-self: center;
    }
  }
`;

const AmountDueContainer = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 0 0 8px 8px;
  padding: 25px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  h5 {
    font-size: 24px;
    font-weight: 900;
  }
`;
