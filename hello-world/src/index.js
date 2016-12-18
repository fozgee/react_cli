import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';


import Layout from './views/layouts/coreLayout'; 
import Home from './views/domains/home/home';
import Page404 from './views/layouts/404';



ReactDOM.render(  
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>        
        <Route path="/p2" component={Home}/>
        <Route path="*" component={Page404}/>      
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('root')
);
