import PropTypes from 'prop-types'
import { TableRow } from './TableRow.jsx'

export const Table = ({ products, columns }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead>
        <TableRow headerClassName="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" product={columns} isHeader={true} />
        </thead>
        <tbody>
        {products.map((product, index) => (
          <TableRow key={index} product={product} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      actions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  columns: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    actions: PropTypes.string.isRequired,
  }).isRequired,
}