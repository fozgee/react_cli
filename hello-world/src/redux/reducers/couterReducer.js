import { createAction, createReducer } from 'redux-act';
import * as statusAction from './statusReducer';


export const add = createAction('add some stuff');
export const increment = createAction('increment the state');
const decrement = createAction('decrement the state');


let initState = {
  number: 1,
  str: 'Hoang Bình',
}

const counterReducer = createReducer({
  [increment]: (state) => {return Object.assign({}, state, {number:state.number + 2, str: 'love HB'})},
  [decrement]: (state) =>  {return Object.assign({}, state, {number:state.number - 1, str: 'love HB'})},
  [add]: (state, payload) => state + payload, 
}, initState); // <-- This is the default state


export const doIncre = () => {
  return (dispatch) => {   
     //   dispatch(increment(getState().counter)) 
           dispatch(increment() );
           dispatch(statusAction.setStatusFetch() );
    }  
}

export default counterReducer;