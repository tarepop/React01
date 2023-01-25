import logo from './logo.svg';
import './App.css';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box size = "20" />
      </header>
    </div>
  );
}

export default App;
