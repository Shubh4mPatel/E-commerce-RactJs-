import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home';
import ErrorPage from './component/ErrorPage';
import Products from './component/Products';
import Cart from './component/Cart';
import LoginForm from './component/LoginPage';
import ProductDetails from './component/ProductDetails';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Login",
    element: <LoginForm />,
    
  },
  {
    path: "/Products",
    element: <Products />
  },
  {
    path: `/ProductDetails/:productId` ,
    element: <ProductDetails />
  },
  {
    path: "/Cart/:UserId",
    element: <Cart/>
  },
  {
    path: "/Order/:UserId",
    element: <Cart/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    
     {/* <Registration></Registration>  */}
    
    {/* <App /> */}
    </Provider>
  </React.StrictMode>
)
