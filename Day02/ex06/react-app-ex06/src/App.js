import logo from './logo.svg';
import './App.css';
import Plant from './Plant';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Plant />
      </header>
    </div>
  );
}

export default App;
