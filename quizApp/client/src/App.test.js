import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';

test('', () => {
  render(<App />);
  render(<Answer />)
  const linkElement = screen.getByText(getByTestId);
  expect(linkElement).toBeInTheDocument(); //assertion asserting that something is going to be true
});
