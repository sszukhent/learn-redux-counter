import { INCREMENT, DECREMENT, RESET } from '../constants';

export const addNumber = count => dispatch => {
  dispatch({
    type: INCREMENT,
    payload: count
  });
};

export const subtractNumber = count => dispatch => {
  dispatch({
    type: DECREMENT,
    payload: count
  });
};
export const resetNumber = () => dispatch => {
  dispatch({
    type: RESET,
    payload: 1
  });
};
