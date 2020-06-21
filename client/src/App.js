import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';


function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/cart" component={Cart} />                    
                </Switch>
            </div>            
        </Router>
    );
}

export default App;