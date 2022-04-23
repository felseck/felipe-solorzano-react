
import { render, screen } from '@testing-library/react';
import App2 from './App2';

import { createStore } from "redux";
import allReducers from "./reducers/reducer.index";
import { Provider } from "react-redux";

//created store
const store = createStore(
  allReducers,
);


test('render app2', () => {
  render(
    <Provider store={store}>
    <App2 />
    </Provider>
    );

});
