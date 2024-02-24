import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../types";
import '../styles.css';

const Product = () => {

    const image = useSelector((state: rootState) => state.products.items[0].image)
    const title = useSelector((state: rootState) => state.products.items[0].title)
    const subtitle = useSelector((state: rootState) => state.products.items[0].subtitle)
    const tagList = useSelector((state: rootState) => state.products.items[0].tags)
    const fetchStatus = useSelector((state: rootState) => state.products.status);
    const error = useSelector((state: rootState) => state.products.error);

    const tags = tagList? (
        tagList.map(tag => {
          return <span key={tag} className="tags">{tag}</span>;
        })
      ) : (
        <span />
    );
    
    const content = (
        <>
            <figure>
                <img src={image} alt={title? title + " image" : "No image"} />
                <figcaption id="title">{title}</figcaption>
                <figcaption id="subtitle">{subtitle}</figcaption>
            </figure>
            <hr />
            <div id="spans">{tags}</div>
            <hr />
        </>
    )
    
    return (
        <div id="product" className="product-container">
            <h1>{fetchStatus === 'loading' && '...Loading'}</h1>
            <h1>{fetchStatus === 'failed' && `Failed to fetch product Info: ${error}`}</h1>
            {fetchStatus === 'succeeded' && content}
        </div>
    );
}

export default Product;