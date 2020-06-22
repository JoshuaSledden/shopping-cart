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
        <div className="product">
          <ul>
            <li>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
            </li>
            <li>
              <Link to={`/products/${product._id}`}><img src={product.image} /></Link> 
            </li>
            <hr />
            <li>
              <button>+ £{product.price}</button>
            </li>
          </ul>        
        </div>
      ))}
    </div>
  );
}

export default Products;
