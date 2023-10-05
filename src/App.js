import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/home'
import SignupPage from './pages/SignupPage';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';

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
]);

function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
