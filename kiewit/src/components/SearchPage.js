import React, { useState } from 'react';
import '../styles/SearchPage.css'
import MaterialTable from "material-table";
import TableLayout from './TableLayout'


function SearchPage({data}) {
  const [searchWord, setSearchWord] = useState('')
  const [employListDefault, setEmployListDefault] = useState(data);
  const [searchResult, setSearchResult] = useState(data)

  const updateResult = (searchWord) => {
    if (searchWord === "") {
      setSearchResult(data)

    } else {
      const filtered = employListDefault.filter(employee => {
        return employee.name.toLowerCase().includes(searchWord.toLowerCase())
       })
       setSearchResult(filtered);
    }
 }
    console.log('searchWord', searchWord)
  return (
    <div>

      {/* Search */}
        <input
          type="text"
          value={searchWord}
          placeholder="Search by name"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={() => updateResult(searchWord)}>
        Search!
        </button>
        <br/>
      {/* Filter  */}
      <select>
        <option value="department">Department</option>
        <option value="age">Age</option>
      </select>
      <TableLayout data = {searchResult}/>


{/*
       {data
          .filter(employee => {
            if (searchWord === "") {
              return employee
            } else if (employee.name.toLowerCase().includes(searchWord.toLowerCase())
            ) {
              return employee
            } else if(employee.department.toLowerCase().includes(searchWord.toLowerCase())) {
              return employee
            }
          }).map((employee, key) => {
            return (
              <div className="employee" key={key}>
              <tr>
                <td> {employee.name} </td>
                <td> {employee.department} </td>
                <td> {employee.age} </td>
              </tr>

              </div>
            )
          })
        }  */}

    </div>
  )
}

export default SearchPage
