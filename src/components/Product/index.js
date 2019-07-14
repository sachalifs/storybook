import React from 'react';
import './styles.css';

const Product = ({ productName, productDescription, imageUrl, imageAlt }) => (
  <article className='product'>
    <div className='image-container'>
      <img src={imageUrl} alt={imageAlt} />
    </div>
    <div className='info-container'>
      <h1>{productName}</h1>
      <p>{productDescription}</p>
    </div>
  </article>

)

export default Product;