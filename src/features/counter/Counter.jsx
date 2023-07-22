import React, { useState } from "react";
import { counterSlice } from "../../store/reducers/counterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        <span>{counter}</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button onClick={() => dispatch(counterSlice.actions.increment())}>
          Incretement
        </button>
        <button onClick={() => dispatch(counterSlice.actions.decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(counterSlice.actions.reset())}>
          Reset
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input onChange={(e) => setAmount(e.target.value)} />
        <button
          onClick={() => dispatch(counterSlice.actions.addByAmount(amount))}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
