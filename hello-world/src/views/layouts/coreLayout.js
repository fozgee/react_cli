import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import '../../App.css';


const CoreLayout = React.createClass(
  {
    render() {
      return (
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>             
            </li>
            <li>
              <Link to="/p1">P1</Link>
            </li>
            <li>
              <Link to="/p2">P2</Link>
            </li>
          </ul>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      ) 
    }
  }
)

export default CoreLayout;
