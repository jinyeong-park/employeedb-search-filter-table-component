import React from 'react'

function DisplayEmployee({data}) {
  console.log('data in DisplayEmployee', data)
  return (
    <div>

      <div>{data.map(employ =>
        <li>
          Name: {employ.name}
          Department: {employ.department}
          Age: {employ.age}
        </li>
      )}
      </div>

    </div>
  )
}

export default DisplayEmployee
