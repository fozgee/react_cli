import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import store,  * as actions  from '../../../Actions';
import store from '../../../redux/store';
import * as actions from '../../../redux/reducers/couterReducer';  
import * as actionsProducts from '../../../redux/reducers/productsReducer';  

class Home extends Component {

  onTodoClick() {
    //store.dispatch(actions.add(5));
    // actions.doIncre();
    //store.dispatch(actions.increment());
    store.dispatch(actions.doIncre());

    store.dispatch(actionsProducts.getProducts());
  };
 

  render() {
    const listProds = <ul>
          { this.props.products.map(function(object,i) {
            return <li key={i}> {object.title}
              <img src={object.image} width='100' />
            </li>
          }) }
        </ul>;
    return (
      <div>
        this is home
            <h3>{this.props.number}</h3>
            <h4>{this.props.str}</h4>
            <a onClick={this.onTodoClick}> increment </a>
            <h5>{this.props.status}</h5>
            {listProds}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    number: state.couterReducer.number,
    str: state.couterReducer.str,
    status: state.status.status,
    products: state.products
  }
}

export default connect(mapStateToProps)(Home);
