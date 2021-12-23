import logo from './logo.svg';
import './App.css';

function App() {
  const Os = ["Android", "Blackberry", "IPhone", "Windows"];
  const model = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <div className="mobileDet">
        <h1>Mobile Operating Systems</h1>
        {Temp(Os)}
      </div>

      <div className="mobileDet">
        <h1>Mobile Manufacturers</h1>
        {Temp(model)}
      </div>
    </div>
  );
}

function Temp(arr){
  return arr.map(el => <li>{el}</li>);
}

export default App;
