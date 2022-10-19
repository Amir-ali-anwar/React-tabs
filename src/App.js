import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allcategories= ['all', ...new Set(items?.map((item)=>item.category))]
  const [menuItems,SetmenuItems]=useState(items)
  const [categories,SetCategories]=useState([])
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allcategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
