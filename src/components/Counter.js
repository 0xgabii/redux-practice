import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';

import { connect } from 'react-redux';

import * as numberActions from '../actions/number';
import * as colorActions from '../actions/color';

class Counter extends Component {

  constructor(props) {
    super(props);    
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setRandomColor() {
    const color = [
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200),
    ];

    this.props.handleRandomizeColor(color);
  }

  render() {

    const color = this.props.color;
    const style = {
      background: `rgb(${color.join(',')})`
    };

    return (
      <div style={style}>
        <Value number={this.props.number} />
        <Control 
          onPlus={this.props.handleIncrement}
          onMinus={this.props.handleDecrement}  
          onRandomizecolor={this.setRandomColor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleIncrement: () => { dispatch(numberActions.increment())},
    handleDecrement: () => { dispatch(numberActions.decrement())},
    handleRandomizeColor: (color) => { dispatch(colorActions.randomizeColor(color))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
