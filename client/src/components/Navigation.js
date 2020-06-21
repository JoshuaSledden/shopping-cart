import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
      <nav>
          <h3>Logo</h3>
          <ul className="nav-links">
              <Link to="/">
                  <li>Home</li>
              </Link>
              <Link to="/products">
                  <li>Products</li>
              </Link>
              <Link to="/cart">
                  <li>Cart</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Navigation;
