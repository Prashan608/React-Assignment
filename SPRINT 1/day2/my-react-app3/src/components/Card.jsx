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
        padding: "20px",        
      }}
    >
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Card;
