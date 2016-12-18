import { createAction, createReducer } from 'redux-act';
import axios from 'axios';


export const getProductsSuccess = createAction('get products success');

let initState = [{title:'t1'}]

const productReducer = createReducer({
  [getProductsSuccess]: (state, data) => data,
}, initState);

export const getProducts = () => {
  return (dispatch) => {
    axios.get('/data.json')
      .then(function (response) {
        console.log(response);
        dispatch(getProductsSuccess(response.data));        
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
}

export default productReducer;