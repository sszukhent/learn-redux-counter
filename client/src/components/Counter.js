import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';

const Counter = props => {
  const { count, addNumber, subtractNumber, resetNumber } = props;

  return (
    <div id='counter_app' className='container'>
      <h1>Redux Counter</h1>
      <h3>{count}</h3>
      <h4>Press the buttons to change the number.</h4>
      <button onClick={() => addNumber(1)} className='btn btn-lg btn-primary'>
        {' '}
        Add
      </button>{' '}
      <button
        onClick={() => subtractNumber(1)}
        className='btn btn-lg btn-warning'
      >
        {' '}
        Subtract
      </button>{' '}
      <button onClick={resetNumber} className='btn btn-lg btn-danger'>
        {' '}
        Reset
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.number.count
});

export default connect(mapStateToProps, actionCreators)(Counter);
