import React from "react";

const Categories = ({ categories, selectItems }) => {
  return (
    <div className="btn-container">
      {categories?.map((category, index) => (
        <button
          className="filter-btn"
          type="filter"
          key={index}
          onClick={() => selectItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
