import "../App.css";

function Navbar({ activePage, setActivePage }) {
  const pages = ["home", "about", "contact"];

  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setActivePage(page)}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: activePage === page ? "#007bff" : "#f0f0f0",
            color: activePage === page ? "white" : "black",
            fontWeight: activePage === page ? "bold" : "normal",
            transition: "0.3s",
          }}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
