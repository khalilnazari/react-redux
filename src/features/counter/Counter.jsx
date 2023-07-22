import React, { useState } from "react";
import { counterSlice } from "../../store/reducers/counterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

const style = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  marginBottom: "20px",
};

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ ...style, fontSize: "30px" }}>
        <span>{counter}</span>
      </div>

      <div style={style}>
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

      <div style={style}>
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
