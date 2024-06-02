import PropTypes from 'prop-types'
import { TableRow } from './TableRow.jsx'

export const Table = ({ products, columns }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead>
        <TableRow headerClassName="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                  columns={columns}
                  isHeader={true} />
        </thead>
        <tbody>
        {products.map((product, index) => (
          <TableRow key={index}
                    columns={columns}
                    data={product}/>
        ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  products: PropTypes.array,
  columns: PropTypes.array
}