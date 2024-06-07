//TableHeader.jsx
import PropsTypes from 'prop-types'

export const TableHeader = ({ columns }) => (
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
  <tr>
    {columns.map((column) => (
      <th scope="col" className="px-6 py-3" key={column.accessor}>
        {column.header}
      </th>
    ))}
    <th scope="col" className="px-6 py-3">
      Acción
    </th>
  </tr>
  </thead>
)

TableHeader.propTypes = {
  columns: PropsTypes.array.isRequired
}
