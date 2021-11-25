import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello'
import Welcome from './component/Welcome'

function App() {
  return (
    <div className="App">
      <div className="App">
        <Hello name="Farhan"></Hello>
        <Hello  name="Tanvir"></Hello>
        <Welcome name="Farhan"></Welcome>
        <Welcome name="Tanvir"></Welcome>
      </div>
      
    </div>
  );
}

export default App;
