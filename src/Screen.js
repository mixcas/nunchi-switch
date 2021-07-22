import { useRedcer } from 'react';

const reducer = (state,action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
}

const initialWindowState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}

const initialState = {
  window1: {
  },
  window1: {
  },
}

const Screen = () = {
  const [state, dispatch] = useReducer(reducer, initialState);
}

export default Screen;
