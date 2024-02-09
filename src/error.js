// import { toHaveTextContent } from "@testing-library/jest-dom/matchers"

// 1. in store - Apply middleware to redux thunk
// 2. onClick={() => dispatch(decNummer())}

// when dispatching something it must be in function like decNummer()


// 3.      <input
//             name="quantity"
//             type="text"
//             className="App"
//             value={myState}
//             onChange={(e) => dispatch(incNummer())}
//           />


//           In input section when we are using 'value' we have to use onchange with them

//  4.         onClick={() => dispatch(incNummer(1))}



// export const incNummer=(num) => {
//     return {
//         type: 'INCREASE_NUMBER',
//         payload: num
//     }
// }


// get the value in action 

// const changeTheNumber = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE_NUMBER":
//       return state + action.payload;
//     case "DECREASE_NUMBER":
//       return state - 1;
//     default:
//       return state;
//   }
// };

//  if you are passing number in 'incNumber' you must pass in store also and get in reducer.

// 5. used this library for extension

//     "redux-devtools-extension": "^2.13.9",
