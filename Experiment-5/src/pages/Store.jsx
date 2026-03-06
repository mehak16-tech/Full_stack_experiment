import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

import ProductCard from "../components/ProductCard.jsx";

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

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="container my-5">

      <h2 className="mb-4">Product Store</h2>

      <div className="row">

        {products.map((p) => {

  const cartItem = cartItems.find(item => item.id === p.id);
  const added = !!cartItem;
  const qty = cartItem ? cartItem.qty : 0;

  return (
    <ProductCard
      key={p.id}
      product={p}
      onAdd={addToCart}
      added={added}
      qty={qty}
    />
  );

})}

      </div>

    </div>
  );
}

export default Store;