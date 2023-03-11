import Cart from "./Cart";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Cart name="product 1" id={1} />
      <Cart name="product 2" id={2} />
      <Cart name="product 3" id={3} />
    </div>
  );
}
