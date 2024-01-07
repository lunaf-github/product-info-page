import React from "react";
import JSONData from '../../../../data/data.json';

const Product = () => {
    const data = JSONData[0];


    const tags = data.tags? (
        data.tags.map(tag => {
          return <span key={tag} className="tags">{tag}</span>;
        })
      ) : (
        <span />
    );

    const alt = data.title
      ? data.title + " image"
      : "No image";


    return (
        <div id="product" className="product-container">
          <figure>
            <img src={data.image} alt={alt} />
            <figcaption id="title">{data.title}</figcaption>
            <figcaption id="subtitle">{data.subtitle}</figcaption>
          </figure>
          <hr />
          <div id="spans">{tags}</div>
          <hr />
        </div>
    );
}

export default Product;