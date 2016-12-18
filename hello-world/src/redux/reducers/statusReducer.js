import { createAction, createReducer } from 'redux-act';

export const setStatusFetch = createAction('fetching data');
export const fetchSuccess = createAction('fetch data success');
export const fetchError = createAction('fetch data error');


let initState = {
  status: "default status",  
}

const statusReducer = createReducer({
  [setStatusFetch]: (state) => {return {status:"fetching"}},
  [fetchSuccess]: (state) =>  "fetch success",
  [fetchError]: (state) => "fetch error", 
}, initState);


export default statusReducer;