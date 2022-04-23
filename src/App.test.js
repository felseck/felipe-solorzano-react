
import { render, screen } from '@testing-library/react';
import App from './App';


describe('test describe',()=>{


test('renders learn react link 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
 // expect('banana').toBe('banana');

});

})
