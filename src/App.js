import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The site ahead <code>contains harmful</code> programs.
        </p>
        <a
          className="App-link"
          href="https://www.cia.gov/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deceptive site ahead
        </a>
      </header>
    </div>
  );
}
//Develop by TrojanVulgar

export default App;
