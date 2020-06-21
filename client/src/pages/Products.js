import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

function Products() {

  useEffect(() => {
    fetchProducts();
  }, [])

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch('products');

    const productData = await data.json();
    setProducts(productData);
  }

  return (
    <div>
      <h1>Products Page</h1>
      {products.map(product => (
        <p key={product._id}>
          <Link to={`/products/${product._id}`}>
          {product.title}        
          </Link>
          - {product.price}
        </p>
      ))}
    </div>
  );
}

export default Products;
