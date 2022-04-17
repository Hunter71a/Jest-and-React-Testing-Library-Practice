import { useState } from 'react';
import './App.css';

function App() {
  const [button, setButton] = useState({
    color: 'red',
    text: 'Change to pink',
    disabled: false,
  });

  console.log(button);

  const changeButton = () => {
    button.color === 'red'
      ? setButton({ ...button, color: 'pink', text: 'Change to red' })
      : setButton({ ...button, color: 'red', text: 'Change to pink' });
  };

  const checkboxHandler = (checkedIfChecked) => {
    setButton({ ...button, disabled: checkedIfChecked });
  };

  // document.getElementById();

  return (
    <div>
      <button
        style={{ backgroundColor: button.color }}
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
      Disable button
    </div>
  );
}

export default App;
