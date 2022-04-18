import { useState, useEffect } from 'react';
import './App.css';

export const buttonColorDefinitions = {
  firstButton: {
    color: 'MediumVioletRed',
  },
  secondButton: {
    color: 'MidnightBlue',
  },
};

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

export const button = {
  one: {
    color: buttonColorDefinitions.firstButton.color,
    name: replaceCamelWithSpaces(buttonColorDefinitions.firstButton.color),
  },
  two: {
    color: buttonColorDefinitions.secondButton.color,
    name: replaceCamelWithSpaces(buttonColorDefinitions.secondButton.color),
  },
};

function App() {
  const [button, setButton] = useState({});

  const changeButton = () => {
    button.color === buttonColorDefinitions.firstButton.color
      ? setButton({
          ...button,
          color: buttonColorDefinitions.secondButton.color,
          text:
            'Change to ' +
            replaceCamelWithSpaces(buttonColorDefinitions.firstButton.color),
        })
      : setButton({
          ...button,
          color: buttonColorDefinitions.firstButton.color,
          text:
            'Change to ' +
            replaceCamelWithSpaces(buttonColorDefinitions.secondButton.color),
        });
  };

  const checkboxHandler = (checkedIfChecked) => {
    setButton({ ...button, disabled: checkedIfChecked });
  };

  useEffect(() => {
    // set current color button definitions in useState
    setButton({
      color: buttonColorDefinitions.firstButton.color,
      text:
        'Change to ' +
        replaceCamelWithSpaces(buttonColorDefinitions.secondButton.color),
      disabled: false,
    });
  }, []);

  // document.getElementById();

  return (
    <div>
      <button
        style={{ backgroundColor: button.disabled ? 'grey' : button.color }}
        onClick={() => changeButton()}
        disabled={button.disabled}
      >
        {button.text}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={button.disabled}
        aria-checked={button.disabled}
        onChange={(e) => checkboxHandler(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
