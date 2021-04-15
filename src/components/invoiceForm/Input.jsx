import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ data, clickHandler, text }) => (
  <div className="container">
    <label htmlFor={text}>
      <p className="label">{text}</p>
      <input type="text" value={data} onChange={(e) => clickHandler(e.target.value)} />
    </label>
  </div>
);

Input.propTypes = {
  data: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Input;
