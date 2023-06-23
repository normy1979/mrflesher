import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro element', () => {
  render(<App />);
  const introElement = screen.getByText(/Hi, i'm matthew/i);
  expect(introElement).toBeInTheDocument();
});

test('renders about', () => {
  render(<App />);
  const introElement = screen.getByText(/since i was a kid/i);
  expect(introElement).toBeInTheDocument();
});
