import logo from './logo.svg';
import './App.css';
import Plant from './Plant';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Plant />
    </div>
  );
}

export default App;
