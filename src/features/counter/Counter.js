import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../reducers/counterSlice";
import { plugin, workingStatus } from "../reducers/testSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const { plugin: pluginName, isWorking } = useSelector((state) => state.test);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by Amount"
          onClick={() => dispatch(incrementByAmount({ amount: 10 }))}
        >
          Increment by 10
        </button>

        <button
          aria-label="Change Plugin Name"
          onClick={() => dispatch(plugin("Pepe"))}
        >
          Change Plugin Name
        </button>

        <button
          aria-label="Turn Off working"
          onClick={() => dispatch(workingStatus(false))}
        >
          Turn Off Working
        </button>
        <h4>Is Working status:</h4>
        <span>{String(isWorking)}</span>
        <h4>Plugin Name</h4>
        <span>{pluginName}</span>
      </div>
    </div>
  );
}
