import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../reducers/cartSlice";

export const products = [{
  id: 1,
  name: "Ultra HD TV",
  description: "50-inch 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility.",
  price: 499.99,
  category: "Electronics"
},
{
  id: 2,
  name: "Bluetooth Headphones",
  description: "Noise Cancelling Over-Ear Headphones with Microphone and Deep Bass.",
  price: 129.99,
  category: "Electronics"
},
{
  id: 3,
  name: "Running Shoes",
  description: "Lightweight and comfortable running shoes with superior cushioning.",
  price: 89.99,
  category: "Footwear"
},
{
  id: 4,
  name: "Backpack",
  description: "Durable and water-resistant backpack suitable for hiking and travel.",
  price: 79.99,
  category: "Accessories"
},
{
  id: 5,
  name: "Smart Watch",
  description: "Fitness tracker with heart rate monitor and GPS.",
  price: 199.99,
  category: "Electronics"
},
{
  id: 6,
  name: "Coffee Maker",
  description: "12-cup programmable coffee maker with auto-shutoff feature.",
  price: 59.99,
  category: "Home Appliances"
},
{
  id: 7,
  name: "Yoga Mat",
  description: "Eco-friendly, non-slip yoga mat with carrying strap.",
  price: 35.99,
  category: "Fitness"
},
{
  id: 8,
  name: "Wireless Mouse",
  description: "Ergonomic wireless mouse with adjustable DPI for precision tracking.",
  price: 24.99,
  category: "Electronics"
},
{
  id: 9,
  name: "Cookware Set",
  description: "10-piece nonstick cookware set, oven safe and easy to clean.",
  price: 99.99,
  category: "Kitchen"
},
{
  id: 10,
  name: "Novel",
  description: "Bestselling fiction novel with engaging characters and a gripping plot.",
  price: 14.99,
  category: "Books"
}];


const ProductList = () => {
  // dispatch your addItem action in your ProducList component
  const dispatch = useDispatch();

  const handleAddProduct = (itemId) => {
    // console.log(item)
    dispatch(addItem(itemId));
  }

  const handleRemoveProduct = (itemId) => {
    // console.log(item)
    dispatch(removeItem(itemId));
  }



  // create a list of products to display
  return (
    <div>
      <h2>Product List</h2>
      <ul>{products.map((product) => (
        <li key={product.id}>
          {product.name}
          <button onClick={() => handleAddProduct(product)}>Add to cart</button>
          <button onClick={() => handleRemoveProduct(product)}>Remove from cart</button>
        </li>
      ))}
      </ul>
    </div>
  );
};


export default ProductList;
