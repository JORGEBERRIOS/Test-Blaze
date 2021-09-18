import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Products from "./components/pages/Products";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddProduct from "./components/products/AddProduct";
import AddItem from "./components/items/AddItem";

import Product from "./components/products/Product";

import Orders from "./components/pages/Orders";
import AddOrder from "./components/orders/AddOrder";
import EditOrder from "./components/orders/EditOrder";


function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/add" component={AddProduct} />
          <Route exact path="/products/:id" component={Product} />
          
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/orders/add" component={AddOrder} />

          <Route exact path="/orders/:id" component={EditOrder} />
          <Route exact path="/items/add/:id" component={AddItem} />

          
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
