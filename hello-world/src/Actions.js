// Import functions
import { createStore } from 'redux';
import { createAction, createReducer } from 'redux-act';

// Create an action creator (description is optional)
export const add = createAction('add some stuff');
export const increment = createAction('increment the state');
const decrement = createAction('decrement the state');

// Create a reducer
// (ES6 syntax, see Advanced usage below for an alternative for ES5)
// doIncrement 

let initState = {
  number: 1,
  str: 'Hoang Bình',
}

const counterReducer = createReducer({
  [increment]: (state) => {return Object.assign({}, state, {number:state.number + 2, str: 'love HB'})},
  [decrement]: (state) => state - 1,
  [add]: (state, payload) => state + payload, 
}, initState); // <-- This is the default state


// Create the store
const store = createStore(counterReducer);

//increment.assignTo(store);
export const doIncre = () => {  
  //increment();
  store.dispatch(increment());
}

export default store;

