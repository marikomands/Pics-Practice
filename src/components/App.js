import React, { useState } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState([]);

  const fetchImages = async (term) => {
    console.log("🚀 ~ fetchImages ~ fetchImages", term);
    const { data } = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 5bctIXcc3llMMCDbih8yLq3KJ5uD1-aBzq0BFhSD3-I",
      },
    });
    console.log("🚀 ~ fetchImages ~ data", data);
    setResult(data.results);
  };

  return (
    <div>
      <SearchBar onSubmit={fetchImages} />
      Found: {result.length} images!
    </div>
  );
};
export default App;
