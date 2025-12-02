// src/App.jsx

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./cartSlice";

function App() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 800 },
    { id: 3, name: "Keyboard", price: 1500 }
  ];

  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shopping Cart</h1>

      <h2>Products</h2>
      {products.map((p) => (
        <div
          key={p.id}
          style={{ display: "flex", gap: "15px", marginBottom: "8px" }}
        >
          <span>{p.name}</span>
          <span>₹{p.price}</span>

          <button onClick={() => dispatch(addItem(p))}>
            Add To Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart Items</h2>
      {cartItems.length === 0 && <p>No items added yet.</p>}

      {cartItems.map((item) => (
        <div
          key={item.id + Math.random()}
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "8px"
          }}
        >
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h2>Total Price: ₹{totalPrice}</h2>
    </div>
  );
}

export default App;
