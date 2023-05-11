# Redux Toolkit in ReactJS
___
This concise example demonstrates how to implement Redux Toolkit in a project using just a few simple steps. We created a store by utilizing multiple reducers in a straightforward scenario.

## Installing redux-toolkit in our project
```sh
# NPM
> npm install @reduxjs/toolkit

# Yarn
> yarn add @reduxjs/toolkit
```

## Create the reducers

1. `counterSlice`: This code will be updating the state of the ‘counter’
```js
import { createSlice } from "@reduxjs/toolkit";
  
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload.amount;
    },
  },
});

// Actions: Functions created inside the reducer property above.
//          Actions are used to update the state of the current Slice.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```
2. `testSlice`: This code will update the state of ‘test’
```js
import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    plugin: "empty",
    isWorking: true,
  },
  reducers: {
    workingStatus: (state, action) => {
      state.isWorking = action.payload;
    },
    plugin: (state, action) => {
      state.plugin = action.payload;
    },
  },
});

export const {workingStatus,plugin} = testSlice.actions;

export default testSlice.reducer;
```
___
## Creating the Store
In the previous step, we created reducers that are now imported in this step.
```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/reducers/counterSlice";
import testReducer from "./features/counter/testSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer,
  },
});
```

___

## Configuring Your Project to Use Redux
We wrap the primary component of our App with the Redux Provider, passing our store as a prop.
```js
import store from "./store";
import { Provider } from "react-redux";

render(  
   <Provider store={store}>
      <App />
    </Provider>
)
```

___

## How to Access and Manipulate the Store
To demonstrate how this works, we have created a component named 'Counter' that modifies the store using both reducers.
```js
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { decrement, increment, incrementByAmount } from "../reducers/counterSlice";
import { plugin, workingStatus } from "../reducers/testSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const pluginName = useSelector((state) => state.test.plugin);
  const isWorking = useSelector((state) => state.test.isWorking);
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
```

### Code explained in fragments:
#### Importing
```js
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../reducers/counterSlice";
import { plugin, workingStatus } from "../reducers/testSlice";
```
* `useSelector`: We retrieve the values of the state declared in the `initialStatus: {}` of each slice.

* `useDispatch`: This hook includes the `dispatch` function, which is utilized to update the state of each slice.

* `../reducers/<name>Slice`: We import reducer functions that include actions to modify the state.

#### Getting the actual state value
```js
const count = useSelector((state) => state.counter.value);
  const pluginName = useSelector((state) => state.test.plugin);
  const isWorking = useSelector((state) => state.test.isWorking);
  const dispatch = useDispatch();
```
* By using `useSelector`, we can access the value of our state.
* We obtain the `dispatch` function from `useDispatch` to invoke the actions for updating the state.

#### Showing and Updating the state
```html
    <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
    >
        Increment
    </button>
    <span>{count}</span>
```

* `dispatch(increment())`: we execute the `increment()` function by passing it as a parameter to the `dispatch()` function.
* `{count}`: this variable is associated with `state.counter.value`, which represents the current value in the store obtained when we invoke `useSelector((state) => state.counter.value)`.

#### Pass in a value as a parameter for updating the state
```html
<button
  aria-label="Increment by Amount"
  onClick={() => dispatch(incrementByAmount({ amount: 10 }))}
>
  Increment by 10
</button>
```
* `dispatch(actionFunction(parameter))`: We utilize `dispatch` by providing an action function with a parameter. For clarification, below is the definition of the `incrementByAmount()` function employed in the aforementioned code snippet.
```js
incrementByAmount: (state, action) => {
      state.value += action.payload.amount;
},
```
___
>This is merely a simple example, so please do not hesitate to contribute if you come across any errors or omissions in this document.
___


⌨️ with ❤️ by Daniel Guglielmi 😊
