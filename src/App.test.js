import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

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

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to pink' });

  //check to see if first click disables button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  //check to see if second click enables button
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Button turns grey when checkbutton checked and reverts to red', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to pink' });

  // disable button, see if it truns grey, enable button, see if it turns red
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('Clicked disabled button has grey background and properly reverts to pink', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to pink' });

  // change button to pink
  fireEvent.click(colorButton);

  // disable button and check color is grey
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });

  // enable button and check color is pink
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'pink' });
});

describe('spaces before camel-case capital letters', () => {
  test('Words for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumFrogGreen')).toBe('Medium Frog Green');
  });
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
