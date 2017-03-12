import React, { PropTypes } from 'react';

const propTypes = {
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
  onRandomizecolor: PropTypes.func,
}

function createWarning(funcName) {
  return console.warn(funcName + ' is Not defined');
}

const defaultProps = {
  onPlus: () => createWarning('onPlus'),  
  onMinus: () => createWarning('onMinus'),  
  onRandomizecolor: () => createWarning('onRandomizecolor'),  
}

const Control = (props) => {
  return (
    <div>
      <button onClick={props.onPlus}>Plus</button>
      <button onClick={props.onMinus}>Minus</button>
      <button onClick={props.onRandomizecolor}>RandomColor</button>
    </div>
  );
};

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;