import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0)

  return (
    <div className="App">
      <div className='container'>
        <div className='container2'>
      <h1>Mouse click counter</h1>
      <h2>count : {count}</h2>
      <div className='buttons'>
      <button onClick={ ()=> setCount(count + 1)}>
        click here
      </button>
      <button onClick = { ()=> setCount(count*0)}>
        reset
      </button>
      </div>
      <p>	&#169; Ruben Jacob</p>
      </div>
      </div>
    </div>
  );
}

export default App;
