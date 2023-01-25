import logo from './logo.svg';
import './App.css';
import Flower from './Flower';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Flower color="red" />

      </header>
    </div>
  );
}

export default App;
