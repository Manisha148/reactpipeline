import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Test get AWS Secret Manager variables</h2>
        <h3>My secret passwords are:
          <li>Password1: {process.env.REACT_APP_PASSWORD1}</li>
          <li>Password2: {process.env.REACT_APP_PASSWORD2}</li>
          <li>Password3: {process.env.REACT_APP_PASSWORD3}</li>
        </h3>
      </header>
    </div>
  );
}

export default App;
