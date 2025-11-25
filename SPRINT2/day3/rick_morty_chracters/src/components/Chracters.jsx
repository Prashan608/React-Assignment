import { useEffect, useRef, useState } from "react";

function Characters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const pageRef = useRef(1); // stores current page (assignment requirement)

  async function fetchData() {
    setLoading(true);

    try {
      let res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      let result = await res.json();
      // API gives 20 items → we only need 10
      setData(result.results.slice(0, 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    pageRef.current = page; // keep ref updated
    fetchData();
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        Rick & Morty Characters — Page {page}
      </h2>

      {/* -------- CHARACTER GRID -------- */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        {data.map((char) => (
          <div 
            key={char.id} 
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              background: "#fafafa"
            }}
          >
            <img 
              src={char.image} 
              alt={char.name} 
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4>{char.name}</h4>
            <p>{char.status}</p>
          </div>
        ))}
      </div>

      {/* -------- PAGINATION -------- */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 1}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: page === 1 ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Prev
        </button>

        <button
          onClick={() => setPage(prev => prev + 1)}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Next
        </button>
      </div>

      <p style={{ textAlign: "center", marginTop: "15px" }}>
        <strong>Current Page (ref):</strong> {pageRef.current}
      </p>
    </div>
  );
}

export default Characters;
