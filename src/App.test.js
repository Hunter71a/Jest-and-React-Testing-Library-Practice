import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with the role of a button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /Change to blue/i });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct initial text', () => {});

test('button turns blue when clicked', () => {});

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /hello react/i });
  expect(linkElement).toBeInTheDocument(); // assertion -- causes the test to succeed or fail
});

test('renders hello react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument(); // assertion -- causes the test to succeed or fail
});
 */
/* test('renders something else', () => {
  throw new Error('Shut up, CHUMP!');
}); */
