import { useSelector } from "react-redux";
import { products } from './ProducList'

const Cart = () => {
  // dispatch your removeItem action in your ProducList component
  // populate your cartItems object from the global state
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
