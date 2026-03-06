import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import { useMemo } from "react";

function Cart() {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [items]);

  return (
    <div className="container py-5">

      <h2>Cart</h2>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map((item) => (
        <div key={item.id} className="card p-3 mb-3">

          <h5>{item.name}</h5>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.qty}</p>

          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>

        </div>
      ))}

      <h4>Total Price: ₹{totalPrice}</h4>

    </div>
  );
}

export default Cart;