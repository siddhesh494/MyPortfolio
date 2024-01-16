import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Body from './Components/Body/Body';
import AppLayout from './Components/AppLayout/AppLayout';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      }
    ]
  }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>

  {/* <React.StrictMode> */}
    <RouterProvider
      router={appRouter}
    />
  {/* </React.StrictMode> */}
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
