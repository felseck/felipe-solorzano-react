
/*
Como tenemos más de un reductor, necesitamos importar la combineReducerfunción auxiliar de Redux. 
Esta función convierte nuestros reductores en un solo reductor que podemos pasar a la createStore API
*/

import counter from "./reducer.counter";
import auth from "./reducer.auth";
import products from "./reducer.products";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  auth,
  products
});
export default allReducers;


