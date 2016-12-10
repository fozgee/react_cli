// Import functions
import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';

// Create an action creator (description is optional)
const add = createAction('add some stuff');
export const increment = createAction('increment the state');
const decrement = createAction('decrement the state');

// Create a reducer
// (ES6 syntax, see Advanced usage below for an alternative for ES5)
// doIncrement 
// export const doIncrement = ({ dispatch }) => {
//   return (nextLocation) => dispatch(locationChange(nextLocation))
// }

const counterReducer = createReducer({
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
  [add]: (state, payload) => state + payload,
  doIncrement: () => {
      store.dispatch(increment())
  }
}, 1); // <-- This is the default state


// Create the store
const store = createStore(counterReducer);

export default store;