import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <h1 style={{ color: "white", postion: "fixed" }}>
          Counter with the "Redux
        </h1>
        <Counter />
      </div>
    </>
  );
}
