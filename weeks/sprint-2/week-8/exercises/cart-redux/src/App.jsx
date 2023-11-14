import { Provider } from "react-redux"
import store from "./store"
import ProductList from "./components/ProducList";
import Cart from "./components/Cart";

export const App = () => {
  return (
    // wrap the app within a <Provider>
    <Provider store={store}>
      <div>
        <h1>Your cart:</h1>
        <Cart />
      </div>
      <ProductList />

    </Provider>
  );
};
