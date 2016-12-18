import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// reducers
import couterReducer from './reducers/couterReducer';
import status from './reducers/statusReducer';
import products from './reducers/productsReducer';

const reducers =  combineReducers({
    couterReducer,
    status,
    products
})

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




export default store;

