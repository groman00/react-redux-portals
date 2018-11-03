import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem } from './actions';

const CartItems = ({ items, removeFromCart }) => (
  <ul>
    { items.map((item, i) => (
      <li key={i}>
        {item.timestamp}
        <button onClick={() => removeFromCart(i)}>Remove</button>
      </li>
    )) }
  </ul>
);

CartItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: (index) => dispatch(removeItem(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);