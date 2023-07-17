import Car from "./components/Car";
import { useReducer } from "react";
import "./App.css";

const initState = {
  isSwitchedOn: false,
  speed: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "switchOn/Off":
      if (state.isSwitchedOn === false) {
        state = {
          ...state,
          speed: 0,
        };
      }
      return (state = {
        ...state,
        isSwitchedOn: !state.isSwitchedOn,
      });
    case "accelerate":
      return (state = {
        ...state,
        speed: state.speed + 5,
      });
    case "brake":
      if (state.speed > 0) {
        return (state = {
          ...state,
          speed: state.speed - 5,
        });
      } else {
        // {
        //   alert("stop");
        //   break;
        // }

        return (state = {
          ...state,
          speed: 0,
        });
      }
    default:
      console.warn("Error: unknown");
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <Car state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
