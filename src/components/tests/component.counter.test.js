import CounterComponent from '../component.counter';
import { render, screen } from '@testing-library/react';
//import { shallow } from 'enzyme';

import { createStore } from "redux";
import allReducers from "../../reducers/reducer.index";
import { Provider } from "react-redux";

//created store
const store = createStore(
  allReducers,
);


describe('components', () => {

  describe('counter', () => {

    it('should display count', () => {

      const container = render(<Provider store={store}><CounterComponent /></Provider>) 

      const text = screen.getByText(/Counter: 0/i);
      expect(text).toBeInTheDocument();

    })



  })

})