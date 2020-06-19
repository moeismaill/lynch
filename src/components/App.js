import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ShopProvider from '../context/shop.Context'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage';
import Cart from './Cart'



const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
 
  const engine = new Styletron();


function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <Cart />
          <Switch>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
