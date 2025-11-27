import { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { isVisible: !state.isVisible };

    default:
      return state;
  }
}

function ToggleVisibility() {
  const [state, dispatch] = useReducer(reducer, { isVisible: false });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Toggle Message
      </button>

      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        {state.isVisible && <p>Hello, World!</p>}
      </div>
    </div>
  );
}

export default ToggleVisibility;
