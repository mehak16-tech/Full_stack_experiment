function CartTable({ cart, onRemove, total }) {
  if (cart.length === 0) {
    return <p className="text-muted">Cart is empty</p>;
  }

  return (
    <>
      <ul className="list-group mb-3">

        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.name}</strong>
              <div className="text-muted small">
                ₹ {item.price} × {item.qty}
              </div>
            </div>

            <div>
              <span className="fw-bold me-3">
                ₹ {item.price * item.qty}
              </span>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}

      </ul>

      <h5 className="text-end fw-bold">
        Total: ₹ {total}
      </h5>
    </>
  );
}

export default CartTable;
