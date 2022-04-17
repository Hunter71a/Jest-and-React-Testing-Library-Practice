import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with the role of a button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /Change to pink/i });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  //expect background color of blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'pink' });

  //expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to pink' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

/* test('button has correct initial text', () => {
  render(<App />);
  const buttonText = screen.getByText(/Change to blue/i);
  expect(buttonText).toBeInTheDocument();
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
}); */

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
