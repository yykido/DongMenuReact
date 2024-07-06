// ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', product })}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList