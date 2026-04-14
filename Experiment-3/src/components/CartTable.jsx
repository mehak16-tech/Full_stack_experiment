function CartTable({ cart, onRemove, total }) {
  if (cart.length === 0) {
    return <p className="text-muted">Cart is empty</p>;
  }

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹ {item.price}</td>
              <td>{item.qty}</td>
              <td>₹ {item.price * item.qty}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5 className="text-end">
        Total: ₹ {total}
      </h5>
    </>
  );
}

export default CartTable;
