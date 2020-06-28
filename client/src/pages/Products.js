import React from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/Products';

class Products extends React.Component {
  constructor() {
    super();

    this.service = new ProductService();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.service.fetchProducts()
      .then(result => {
        this.setState({ products: result })
      });
  }

  render() {
    return (
      <div>
        <h1>Products Page</h1>
        {this.state.products.map(product => (
          <div className="product">
            <ul>
              <li>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
                <hr />
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
}

export default Products;