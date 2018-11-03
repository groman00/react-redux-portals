import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addItem } from './actions';

const AddToCart = ({ addToCart, text }) => (
  ReactDOM.createPortal(
    <button
      onClick={() => addToCart(Date.now())}>
      Add To Cart
    </button>,
    document.getElementById('button'),
  )
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addToCart: (timestamp) => dispatch(addItem(timestamp)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
