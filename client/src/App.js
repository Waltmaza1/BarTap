import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { updateUser } from './actions/user-actions';
import { bindActionCreators } from 'redux';



function App(props) {

var onUpdateUser = (e) => {
    this.props.setState(e.target.value);
  }
  return (
    <div className="App">
      <input onChange={onUpdateUser} />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user
  }
};
const mapActionsToProps =(dispatch, props) =>{
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch)
};

export default connect(mapStateToProps, mapActionsToProps )(App);
