import React from 'react';


function TableLayout({data}) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} celllSpacing={0}>
      <thead>
        {/* Header */}
        <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr>

      </thead>
      <tbody>


      </tbody>

    </table>
  );
}

export default TableLayout

