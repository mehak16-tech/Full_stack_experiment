import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>${item.price * item.quantity}</span>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h4>Total: ${totalPrice}</h4>
            <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
