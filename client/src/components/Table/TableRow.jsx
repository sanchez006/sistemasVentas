//TableRow.jsx
import PropsTypes from 'prop-types'

export const TableRow = ({ row, columns, onEdit, onDelete, selectedRow, onRowClick }) => {
  const handleEditClick = (e) => {
    e.stopPropagation(); // Evita que el click en Editar seleccione la fila
    onEdit(row)
  }

  return(
    <tr
      onClick={() => onRowClick(row)}
      className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${
        selectedRow ? 'bg-gray-200 dark:bg-gray-900' : ''
      }`}
    >
      {columns.map((column) => (
        <td className="px-6 py-4" key={column.accessor}>
          {row[column.accessor]}
        </td>
      ))}
      <td className="flex items-center px-6 py-4">
        <button
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={handleEditClick}
        >
          Editar
        </button>
        <button
          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
          onClick={(e) => {
            e.stopPropagation(); // Evita que el click en Eliminar seleccione la fila
            onDelete(row.id);
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  row: PropsTypes.object.isRequired,
  columns: PropsTypes.array.isRequired,
  onEdit: PropsTypes.func.isRequired,
  onDelete: PropsTypes.func.isRequired,
  selectedRow: PropsTypes.bool,
  onRowClick: PropsTypes.func.isRequired
}
