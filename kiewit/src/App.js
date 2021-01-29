import './App.css';
import data from './data.js';
import SearchPage from './components/SearchPage'


function App() {

  return (
    <div className="App">
      <h1>Employee Database</h1>
      <SearchPage data={data}/>
    </div>
  );
}

export default App;
