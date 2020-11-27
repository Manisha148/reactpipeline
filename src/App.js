import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Test get AWS Secret Manager variables</h2>
        <h3>My secret password is: {process.env.REACT_APP_SECRET_PASSWORD}</h3>
      </header>
    </div>
  );
}

export default App;
