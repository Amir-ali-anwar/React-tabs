import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories?.map((category,index) => (
        <button className="filter-btn" type="filter" key={index}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
