import React, { PropTypes } from 'react';

const propTypes = {
  number: PropTypes.number,
};

const defaultProps = {
  number: -1
}

const Value = (props) => {
  return (
    <h1>{props.number}</h1>
  );
};

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;