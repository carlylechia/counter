import { useState } from 'react';
import Button from './Button';
import './App.css';

function App() {
    const [ count, setCount ] = useState(0);

  const incrementer = num => {
    setCount(count + num)
  }
  return (
    <>
      <div className="App">
        <Button num={1} whenClicked={incrementer} />
        <Button num={10} whenClicked={incrementer} />
        <Button num={100} whenClicked={incrementer} />
        <Button num={1000} whenClicked={incrementer} />
        <Button num={0.1} whenClicked={incrementer} />
      </div>
      <span>{count}</span>
    </>
  );
}

export default App;
