import { useState } from "react";

import ProductCard from "../components/ProductCard.jsx";
import CartTable from "../components/CartTable.jsx";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Mouse", price: 800 },
  { id: 5, name: "Smart Watch", price: 3500 },
  { id: 6, name: "Monitor", price: 12000 },
  { id: 7, name: "Speaker", price: 2500 },
  { id: 8, name: "USB Hub", price: 600 },
  { id: 9, name: "Tablet", price: 18000 },
  { id: 10, name: "Gaming Chair", price: 9000 },
  { id: 11, name: "Webcam", price: 2200 },
  { id: 12, name: "Power Bank", price: 1200 }
];


function Store() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);

    if (found) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container my-5">
      <div className="row">

        <div className="col-md-7">
          <h4 className="mb-3">Products</h4>

          <p className="text-muted mb-4">
            Browse the available products and add them to your cart.
            The total price is calculated automatically.
          </p>

          <div className="row">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAdd={addToCart}
              />
            ))}
          </div>
        </div>

        <div className="col-md-5">
          <h4 className="mb-3">Cart</h4>

          <CartTable
            cart={cart}
            onRemove={removeFromCart}
            total={totalPrice}
          />
        </div>

      </div>
    </div>
  );
}

export default Store;
