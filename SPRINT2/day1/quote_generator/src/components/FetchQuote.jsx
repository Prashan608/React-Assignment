import { useEffect, useState } from "react";
import "../App.css";

function FetchQuote() {
  const [quote, setQuote] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch a new quote
  async function fetchingQuote() {
    setLoad(true); // Reset loading when fetching again
    try {
      let res = await fetch("https://api.quotable.io/random");
      let data = await res.json();
      setQuote(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoad(false);
    }
  }

  // Fetch on mount + auto-refresh every 30 seconds
  useEffect(() => {
    fetchingQuote();

    let interval = setInterval(() => {
      fetchingQuote();
    }, 30000);

    return () => clearInterval(interval); // Clean up interval
  }, []);

  // UI Handling
  if (load) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ padding: 20, border: "1px solid gray", margin: 20 }}>
      <h3>{quote.content}</h3>
      <p>— {quote.author}</p>

      <button onClick={fetchingQuote} style={{ marginTop: 10 }}>
        Get New Quote
      </button>
    </div>
  );
}

export default FetchQuote;
