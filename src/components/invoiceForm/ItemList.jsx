/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import deleteIcon from 'assets/icon-delete.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemList = ({ data, handleDelete, position, modifyItem }) => (
  <ItemEntry>
    <ItemData position={position} dataType="itemName">
      <label htmlFor="item-name">
        <p className="label">Item Name</p>
        <input value={data.name} onChange={(p) => modifyItem('itemName', data, p.target.value)} />
      </label>
    </ItemData>
    <ItemData position={position} dataType="qty">
      <label htmlFor="quantity">
        <p className="label">Qty.</p>
        <input value={data.quantity} onChange={(p) => modifyItem('qty', data, p.target.value)} />
      </label>
    </ItemData>
    <ItemData position={position} dataType="price">
      <label htmlFor="price">
        <p className="label">Price</p>
        <input
          type="text"
          value={data.price}
          onChange={(p) => modifyItem('price', data, p.target.value)}
        />
      </label>
    </ItemData>
    <ItemData position={position} dataType="total">
      <label htmlFor="total">
        <p className="label">Total</p>
        <p> {data.total}</p>
      </label>
    </ItemData>
    <ItemData
      position={position}
      dataType="bin"
      onClick={() => {
        handleDelete(data.id);
      }}
    >
      <label htmlFor="bin">
        <h6>{''}</h6>
        <div className="imgContainer">
          <img src={deleteIcon} alt="" />
        </div>
      </label>
    </ItemData>
  </ItemEntry>
);

ItemList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  modifyItem: PropTypes.func.isRequired,
};

export default ItemList;

const ItemEntry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ dataType }) =>
    (dataType === 'itemName' && 'flex-start') ||
    (dataType === 'qty' && 'center') ||
    (dataType === 'price' && 'flex-start') ||
    (dataType === 'total' && 'flex-end') ||
    (dataType === 'bin' && 'flex-end')};
  width: ${({ dataType }) =>
    (dataType === 'itemName' && '35%') ||
    (dataType === 'qty' && '10%') ||
    (dataType === 'price' && '17%') ||
    (dataType === 'total' && '17%') ||
    (dataType === 'bin' && '5%')};
  .imgContainer {
    height: ${({ position }) => (position === 0 ? '80px' : '40px')};
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .label {
    display: ${({ position }) => (position === 0 ? 'inline' : 'none')};

    @media screen and (max-width: 600px) {
      display: inline;
    }
  }
  img {
    width: 80%;
    margin-bottom: 12px;
  }

  p {
    height: 40px;
    line-height: 40px;
    text-align: right;
  }
  @media screen and (max-width: 600px) {
    width: ${({ dataType }) =>
      (dataType === 'itemName' && '100%') ||
      (dataType === 'qty' && '15%') ||
      (dataType === 'price' && '33%') ||
      (dataType === 'total' && '33%') ||
      (dataType === 'bin' && '5%')};
  }
`;
