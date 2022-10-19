import React from 'react';

const Menu = ({ items }) => {
  return (
    <section className="section-center">
      {items?.map((item) => {
        const { title, price, img, id,desc } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} className="photo" alt={title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
