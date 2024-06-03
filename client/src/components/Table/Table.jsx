import PropsTypes from 'prop-types'
import { TableHeader } from './TableHeader.jsx'
import { TableRow } from './TableRow.jsx'
import { useState } from 'react'

export const Table = ({ columns, data, onEdit, onDelete }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader columns={columns}/>
        <TableRow data={data}
                  columns={columns}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  selectedRow={selectedRow}
                  onRowClick={handleRowClick}
        />
      </table>
    </div>
  )
}

Table.propTypes = {
  columns: PropsTypes.array.isRequired,
  data: PropsTypes.array.isRequired,
  onEdit: PropsTypes.func.isRequired,
  onDelete: PropsTypes.func.isRequired
}