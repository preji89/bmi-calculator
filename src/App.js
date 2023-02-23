
import { useState,useMemo } from 'react';
import './App.css';

function App() {

  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);

  function onHeightChange(event){
    const height = event.target.value;
    setHeight(height);

  }
  function onWeightChange(event){
    const weight = event.target.value;
    setWeight(weight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);


  return (
    <main >
      <h1>BMI Calculator</h1>
      <div className='inputs-section'>
        <p>Weight: {weight} kgs</p>
        <input type="range" min="10" max="220" step="1" value={weight} onChange={onWeightChange}></input>
        <p>Height: {height} cms </p>
        <input type="range" min="40" max="220" step="1" value={height} onChange={onHeightChange}></input>
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <output>{output}</output>
      </div>
    </main>
  );
}

export default App;
