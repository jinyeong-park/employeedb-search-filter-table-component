import React, { useState } from 'react';
import './App.css';
import data from './data.js';
import SearchPage from './components/SearchPage';




function App() {
//   const [input, setInput] = useState('');
//   const [employListDefault, setEmployListDefault] = useState(data);
//   const [employList, setEmployList] = useState();

//   const updateInput = (input) => {
//     const filtered = employListDefault.filter(employee => {
//      return employee.name.toLowerCase().includes(input.toLowerCase())
//     })
//     setInput(input);
//     setEmployList(filtered);
//  }

//   return (
//     <div className="App">
//       <h1>Employee Database</h1>
//       <SearchPage
//         input={input}
//         onChange={updateInput}/>
//       <Table data={employList}/>
//     </div>
// );


  return (
    <div className="App">
      <h1>Employee Database</h1>
      <SearchPage data={data}/>
    </div>
  );
}

export default App;
