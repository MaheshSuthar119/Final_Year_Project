import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/home'
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route,Link,} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/productDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  { 
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  { 
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  { 
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
