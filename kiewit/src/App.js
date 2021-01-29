import './App.css';
import data from './data.js';
import DisplayEmployee from './components/DisplayEmployee'

function App() {

  return (
    <div className="App">
      <h1>Employee Database</h1>

      <DisplayEmployee data={data}/>


    </div>
  );
}

export default App;
