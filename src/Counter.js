import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  return (
    <>
      <hr />
      <h1 style={{ color: "green" }}>Total Balace :{count} </h1>
      <br />
      <button style={{ backgroundColor: "blue" }}>Earn 10</button>
      <br />
      <br />

      <button style={{ backgroundColor: "red" }}>Lost 5</button>
      <br />
    </>
  );
};

export default Counter;
