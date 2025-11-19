import "../App.css"
import { useState } from "react"

function FetchProducts () {
  const [load,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [data,setData] = useState([]);

  async function fetchingData () {

   try {
     setLoading(true);
     let response = await fetch("https://fakestoreapi.com/products")
     let result = response.json();
     setData(result);
   } catch (error) {
    setError(error.message);
   }

  }

  return (
     <div>
        <h1>Learning fetching data From api using react</h1>
        <button onClick={fetchingData}>Fetch products</button>
        {data.map((ele)=>(
            <ul key={ele.id}>
                <li>{ele.title}</li>
            </ul>
        ))}
     </div>
  )
}

export default FetchProducts;