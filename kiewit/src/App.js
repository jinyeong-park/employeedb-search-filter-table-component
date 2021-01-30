import React, { useState } from 'react';
import './App.css';
import employeeData from './data.js';
import Table from './components/Table';

function App() {
  const [data, setData] = useState(employeeData);
  const [q, setQ] = useState('');
  const [searchColumns, setSearchColumns] = useState(["name"])

  // useEffect(() => {
  // }, [])


  // search by name, department, age(toString())
  function search(rows) {
    return rows.filter(row =>
      searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1))
  }

  const columns = data[0] && Object.keys(data[0])
  return (
    <div className="App">
      <h1>Employee DB</h1>
      <div>
        <input className="app__searchbar" type='text' value={q} placeholder="Search or Filter.." onChange={(e) => setQ(e.target.value)} />
        {
          columns && columns.map(column => (<label>
            <input type="checkbox" checked={searchColumns.includes(column)}
              onChange={(e) => {
                const checked = searchColumns.includes(column)
                setSearchColumns((prev) =>
                checked
                  ? prev.filter((sc) => sc !== column)
                  : [...prev, column]
                );
              }}
            />
            {column}
            </label>
          ))
        }
      </div>
      <Table data={search(data)}/>
    </div>
  );
}

export default App;
