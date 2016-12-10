import React, { Component, PropTypes } from 'react';

import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import store from './Actions';
import  * as actions from './Actions'

function guid() {
     function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  };

class listItem extends Component {

  render() {
    return <h1>hello  {guid()} </h1>
  }
} 

const DeleteAccount = ({a}) => (
  // <div>
  //   <p>Are you sure? {a}</p>   
  // </div>
  //a.map((_a)=> <h4>hey _a</h4>)
  // [1,2,3].map((n) => {
  //   console.log(1);
  //   return <h1> {(n)} {guid()}</h1>}
  //   ) 
  <p>
    {a.map((n) => {console.log((n)); return n  })}
  </p>
);
// this.state._num.map((number) =>
//     <h4>{number + this.guid()}</h4>
//    );


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { _num: [1,2,3] };
    this.onTestClick = this.onTestClick.bind(this);
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  onTestClick() {
   this.setState((prevState) => ({
      _num: prevState._num.concat(prevState._num[prevState._num.length-1]+1+ " -- " +  guid())
    }));

  };

  onTodoClick() {
   store.dispatch(actions.increment());
  };


  render() {
    // var rows = [];
    // for (var i=0; i < this.state._num; i++) {
    //   console.log(i);
    //  // debugger
    //     rows.push(<h5>hellow chiu {i + this.guid()}</h5> );
    // }
 
    return (
      <div className="App">
        <div className="App-header" onClick={this.onTestClick}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <listItem />
        <DeleteAccount a={this.state._num} />
        <h3>{this.props.number}</h3>
        <a onClick={this.onTodoClick}> Increment</a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state
  }
}

export default connect(mapStateToProps )(App);
