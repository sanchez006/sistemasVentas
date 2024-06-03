import PropsTypes from 'prop-types'

export const TableRow = ({ data, columns, onEdit, onDelete }) => (
  <tbody>
  {data.map((row, rowIndex) => (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      key={rowIndex}
    >
      {columns.map((column) => (
        <td className="px-6 py-4" key={column.accessor}>
          {row[column.accessor]}
        </td>
      ))}
      <td className="flex items-center px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={() => onEdit(row.id)}
        >
          Editar
        </a>
        <a
          href="#"
          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
          onClick={() => onDelete(row.id)}
        >
          Eliminar
        </a>
      </td>
    </tr>
  ))}
  </tbody>
)

TableRow.propTypes = {
  data: PropsTypes.array.isRequired,
  columns: PropsTypes.array.isRequired,
  onEdit: PropsTypes.func.isRequired,
  onDelete: PropsTypes.func.isRequired
}
