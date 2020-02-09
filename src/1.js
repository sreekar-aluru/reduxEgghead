// import { createStore } from "redux";
// import React from "react";
// import ReactDOM from "react-dom";
// import expect from "expect";
// import deepFreeze from "deepfreeze";

// const testToggleTodo = () => {
//   const stateBefore = [
//     {
//       id: 0,
//       text: "Learn Redux",
//       completed: false
//     },
//     {
//       id: 1,
//       text: "tuch",
//       completed: false
//     }
//   ];

//   const action = {
//     type: "TOGGLE_TODO",
//     id: 1
//   };

//   const stateAfter = [
//     {
//       id: 0,
//       text: "Learn Redux",
//       completed: false
//     },
//     {
//       id: 1,
//       text: "tuch",
//       completed: true
//     }
//   ];

//   deepFreeze(stateBefore);
//   deepFreeze(action);
//   expect(todos(stateBefore, action)).toEqual(stateAfter);
// };

// const testAddTodo = () => {
//   const stateBefore = [];
//   const action = {
//     type: "ADD_TODO",
//     id: 0,
//     text: "Learn Redux"
//   };
//   const stateAfter = [
//     {
//       id: 0,
//       text: "Learn Redux",
//       completed: false
//     }
//   ];

//   deepFreeze(stateBefore);
//   deepFreeze(action);

//   expect(todos(stateBefore, action)).toEqual(stateAfter);
// };

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const Counter = ({ value, onIncrement, onDecrement }) => (
//   <>
//     <h1>{value}</h1>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </>
// );
// const store = createStore(counter);
// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() =>
//         store.dispatch({
//           type: "INCREMENT"
//         })
//       }
//       onDecrement={() =>
//         store.dispatch({
//           type: "DECREMENT"
//         })
//       }
//     />,
//     document.getElementById("root")
//   );
// };

// store.subscribe(render);
// render();

// const addCounter = list => {
//   return [...list, 0];
// };

// const removeCounter = (list, index) => {
//   return [...list.slice(0, index), ...list.slice(index + 1)];
// };

// const incrementCounter = (list, index) => {
//   return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
// };

// const toggleTodo = todo => {
//   return { ...todo, completed: !todo.completed };
// };

// // const testToggleTodo = () => {
// //   const todoBefore = {
// //     id: 0,
// //     text: "Learn Redux",
// //     completed: false
// //   };
// //   const todoAfter = {
// //     id: 0,
// //     text: "Learn Redux",
// //     completed: true
// //   };

// //   deepFreeze(todoBefore);
// //   expect(toggleTodo(todoBefore)).toEqual(todoAfter);
// // };

// const testAddCounter = () => {
//   const listBefore = [];
//   const listAfter = [0];
//   deepFreeze(listBefore);
//   expect(addCounter(listBefore)).toEqual(listAfter);
// };

// const testRemoveCounter = () => {
//   const listBefore = [0, 1, 20];
//   const listAfter = [0, 20];

//   deepFreeze(listBefore);
//   expect(removeCounter(listBefore, 1)).toEqual(listAfter);
// };

// const testIncrementCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 11, 20];

//   deepFreeze(listBefore);
//   expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
// };
// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();
// testToggleTodo();
// testAddTodo();

// ----------simple counter-----------
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const Counter = ({ value }) => <h1>{value}</h1>;
// const store = createStore(counter);
// const render = () => {
//   ReactDOM.render(
//     <Counter value={store.getState()} />,
//     document.getElementById("root")
//   );
// };

// store.subscribe(render);
// render();
