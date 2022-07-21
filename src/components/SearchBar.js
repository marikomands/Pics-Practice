import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>Search</label>
        <input className="input" onChange={(e) => setTerm(e.target.value)} />
      </form>
    </div>
  );
};

export default SearchBar;
