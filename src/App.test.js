import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const introElement = screen.getByText(/Hi, i'm matt/i);
  expect(introElement).toBeInTheDocument();
});
