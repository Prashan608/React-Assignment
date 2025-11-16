import "../App.css";

function Card({ title, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "yellow",
        textAlign: "center",
        padding: "20px",        // added small padding so content doesn't touch edges
        margin: "10px"          // optional spacing between cards
      }}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Card;
