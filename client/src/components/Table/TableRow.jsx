import PropTypes from 'prop-types';
import { TableCell } from './TableCell';

export const TableRow = ({ product, isHeader = false, headerClassName = '' }) => {
  const { id, name, color, category, price, actions } = product;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <TableCell className="w-4 p-4" isHeader={isHeader} headerClassName={headerClassName}>{id}</TableCell>
      <TableCell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" isHeader={isHeader} headerClassName={headerClassName}>
        {name}
      </TableCell>
      <TableCell className="px-6 py-4" isHeader={isHeader} headerClassName={headerClassName}>{color}</TableCell>
      <TableCell className="px-6 py-4" isHeader={isHeader} headerClassName={headerClassName}>{category}</TableCell>
      <TableCell className="px-6 py-4" isHeader={isHeader} headerClassName={headerClassName}>{price}</TableCell>
      <TableCell className="px-6 py-4" isHeader={isHeader} headerClassName={headerClassName}>
        {isHeader ? (
          actions
        ) : (
          actions.map((action, index) => (
            <a key={index} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">{action}</a>
          ))
        )}
      </TableCell>
    </tr>
  );
};

TableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    actions: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  }).isRequired,
  isHeader: PropTypes.bool,
  headerClassName: PropTypes.string,
};
