import { INCREMENT, DECREMENT, RESET } from '../constants';

const initialState = {
  count: 0
};

export default function(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case RESET:
      return { ...state, count: state.count / state.count - action.payload };
    default:
      return state;
  }
}
