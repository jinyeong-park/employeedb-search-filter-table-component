import React, { useState } from 'react';
import '../styles/SearchPage.css'


function SearchPage({data}) {
  const [searchWord, setSearchWord] = useState('')

  console.log('searchword', searchWord)
  return (
    <div>
        <input
          type="text"
          value={searchWord}
          placeholder="Search by name"
          onChange={(e) => setSearchWord(e.target.value)}
        />
      {data
        .filter(employee => {
          if (searchWord === "") {
            return employee
          } else if (employee.name.toLowerCase().includes(searchWord.toLowerCase())) {
            return employee
          }
        }).map((employee, key) => {
          return (
            <div className="employee" key={key}>
             <li>
                Name: {employee.name}
                Department: {employee.department}
                Age: {employee.age}
              </li>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchPage
