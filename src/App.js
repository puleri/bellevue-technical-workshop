import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import Write from './components/Firestore/Write';
import ReadRealTime from './components/Firestore/ReadRealTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Login />
        <Write />
        <ReadRealTime />
      </header>
    </div>
  );
}

export default App;
