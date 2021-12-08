import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello'
import Welcome from './component/Welcome'
import SecWelcome from './bootstrapComponent/Welcome'

function App() {
  return (
    <div className="App">
      <div className="App">
        <SecWelcome></SecWelcome>
        {/* <Hello name="Farhan"></Hello>
        <Hello  name="Tanvir"></Hello>
        <Welcome name="Farhan"></Welcome>
        <Welcome name="Tanvir"></Welcome> */}
      </div>
      
    </div>
  );
}

export default App;
