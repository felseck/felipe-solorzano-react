import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4Router from './App4Router';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/reducer.index";
import { Provider } from "react-redux";

import reportWebVitals from './reportWebVitals';


//created store
const store = createStore(
  allReducers, applyMiddleware(thunk)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode >
);

const app2 = ReactDOM.createRoot(document.getElementById('app2'));
app2.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);

const app3 = ReactDOM.createRoot(document.getElementById('app3'));
app3.render(
  <React.StrictMode>
    <Provider store={store}>
      <App3 />
    </Provider>
  </React.StrictMode>
);

const app4router = ReactDOM.createRoot(document.getElementById('app4router'));
app4router.render(
  <BrowserRouter>
    <Provider store={store}>
      <App4Router />
    </Provider>
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
