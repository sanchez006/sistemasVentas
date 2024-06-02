import PropTypes from 'prop-types';
import { TableCell } from './TableCell';

export const TableRow = ({ data, columns, isHeader = false, headerClassName = '' }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      {columns.map((column, index) => (
        <TableCell
          key={index}
          className={column.className}
          isHeader={isHeader}
          headerClassName={headerClassName}
        >
          {isHeader ? column.header : column.render ? column.render(data[column.field], data) : data[column.field]}
        </TableCell>
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  data: PropTypes.object,
  columns: PropTypes.array.isRequired,
  isHeader: PropTypes.bool,
  headerClassName: PropTypes.string,
};