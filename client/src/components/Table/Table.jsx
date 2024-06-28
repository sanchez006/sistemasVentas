//Table.jsx
import PropsTypes from 'prop-types'
import { TableRow } from './TableRow.jsx'
import { TableHeader } from './TableHeader.jsx'

export const Table = ({ columns, data, onEditClick, onDelete }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader columns={columns}/>
          <tbody>
            {data.map((row) => (
              <TableRow key={row.id}
                        row={row}
                        columns={columns}
                        onEdit={onEditClick}
                        onDelete={onDelete}
              />
            ))}
          </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  columns: PropsTypes.array.isRequired,
  data: PropsTypes.array.isRequired,
  onEditClick: PropsTypes.func.isRequired,
  onDelete: PropsTypes.func.isRequired,
}
