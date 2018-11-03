import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';

const AddToCart = ({ addToCart, text }) => (
  <button onClick={() => addToCart(Date.now())}>
    { text }
  </button>
);

const mapStateToProps = state => ({
  text: 'Add to Cart',
});

const mapDispatchToProps = dispatch => ({
  addToCart: (timestamp) => dispatch(addItem(timestamp)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
