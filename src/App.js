import './App.css';

// import component 
import Nav from './components/Nav';
import Tweets from './components/Tweets';


function App() {
  const name = "delightfullynerdy";
  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className="home">
        <Nav />
        <Tweets  me={name} />
      </div>
    </div>
  );
}

export default App;
