import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import axios from "axios"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"

function App() {
  const fetchUsers = async () => {
     try {
      const {data} = await axios.get("/.netlify/functions/users");
      console.log('Your users: ', data);
     } catch (error) {
       console.log('your errors: ', error)
     }
  }
 useEffect(() => {
   fetchUsers();
 }, [])
  return (
    <div>
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
  );
}

export default App;
