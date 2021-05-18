import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ data, dataChangeHandler, text, keyPress }) => (
  <div className="container">
    <label htmlFor={text}>
      <p className="label">{text}</p>
      <input
        onKeyPress={(e) => keyPress(e)}
        type="text"
        value={data}
        onChange={(e) => dataChangeHandler(e.target.value)}
      />
    </label>
  </div>
);

Input.propTypes = {
  data: PropTypes.string.isRequired,
  dataChangeHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  keyPress: PropTypes.func.isRequired,
};

export default Input;
