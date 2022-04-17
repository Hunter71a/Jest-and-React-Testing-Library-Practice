import { useState } from 'react';
import './App.css';

function App() {
  const [button, setButton] = useState({
    color: 'red',
    text: 'Change to pink',
  });
  const changeButton = () => {
    button.color === 'red'
      ? setButton({ color: 'pink', text: 'Change to red' })
      : setButton({ color: 'red', text: 'Change to pink' });
  };

  return (
    <div>
      <button
        style={{ backgroundColor: button.color }}
        onClick={() => changeButton()}
      >
        {button.text}
      </button>
    </div>
  );
}

export default App;
