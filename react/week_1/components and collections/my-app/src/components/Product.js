import React from 'react';
import T from 'prop-types';

const Product = ({ imgUrl, alt, title, price, quantity }) => (
  <div>
    <img src={imgUrl} alt={alt} width={640} />
    <h2>{title}</h2>
    <p>Price: {price}$</p>
    <p>{quantity < 50 ? 'Few left' : 'In stock'}</p>
    <button type="button">Add to cart</button>
  </div>
);

Product.defaultProps = {
  alt: 'product image',
};
Product.propTypes = {
  imgUrl: T.string.isRequired,
  alt: T.string,
  title: T.string.isRequired,
  price: T.number.isRequired,
  quantity: T.number.isRequired,
};
// Всегда выполнять экспорт функции по имени, чтоб было проще при дебаге
export default Product;
