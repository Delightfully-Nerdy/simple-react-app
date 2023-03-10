import React,{useState} from 'react';
import './App.css';

// import component 
import Nav from './components/Nav';
import Video from './components/Video';


function App() {

  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);


  const incrementor = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const toggler = () => {
    setToggle((prev) => !prev );
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={incrementor}>Increment</button>
      <h2>{counter}</h2>
      {/* <h1 className={toggle ? 'active' : ''}>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={incrementor}>Click</button>
      <button onClick={toggler}>Toggle</button> */}
      {/* <Nav toggle={toggle}/>
      <Video nr={counter} setToggle={toggler}/> */}
    </div>
  );
}

export default App;
