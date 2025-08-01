import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <select onChange={onCategoryChange} aria-label="Filter items by category">
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
