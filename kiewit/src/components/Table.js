import React from 'react';
import '../styles/Table.css'


function Table({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} celllSpacing={0} className="table">
      <thead>
        {/* Header */}
        <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>

      </thead>

      <tbody>
        {data.map(row => <tr>
          {
            columns.map((column) => <td>{row[column]}</td>)
            }
          </tr>
          )}

      </tbody>

    </table>
  );
}

export default Table

