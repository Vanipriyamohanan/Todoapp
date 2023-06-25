
import {useState} from 'react';
import './App.css';
import Counter from './component/Counter';

function App() {
  const [state,setState]=useState(false)
  return (
    <div className='App'>
    <h1 onClick={()=>setState(!state)}>show/hide</h1>
    {state && <Counter/>}
    </div>
   
  );
}

export default App;
