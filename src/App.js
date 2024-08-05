import "./App.css";
import DataFetch from "./components/DataFetch";
function App() {
  return (
    <div className="App">
      <div class="container">
        <div  id = 'a'>
        <h1>Star</h1>
        </div>
        <div id = 'y' >
        <h1 >Wars</h1>
        </div>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <DataFetch />
    </div>
  );
}

export default App;
