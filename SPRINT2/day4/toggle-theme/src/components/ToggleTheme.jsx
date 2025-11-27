import { useReducer } from "react";


// Reducer function
function reducer(state, action) {
  if (action.type === "TOGGLE_THEME") {
    return {
      theme: state.theme === "light" ? "dark" : "light"
    };
  }

  return state;
}


// Component
function ToggleTheme() {
  const [state, dispatch] = useReducer(reducer, { theme: "light" });

  const styles = {
    backgroundColor: state.theme === "light" ? "white" : "black",
    color: state.theme === "light" ? "black" : "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={styles}>
      <h1>Current Theme: {state.theme}</h1>

      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ToggleTheme;
