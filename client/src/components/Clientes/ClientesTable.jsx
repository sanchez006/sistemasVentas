import { TableRow } from '../Table/TableRow';
import { columns } from './columnsConfig.jsx';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    color: 'Rojo',
    category: 'Categoría 1',
    price: '$10',
    actions: ['Editar', 'Eliminar']
  },
  // Otros productos...
];

export const ClientesTable = () => (
  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead>
    <TableRow data={{}} columns={columns} isHeader={true}/>
    </thead>
    <tbody>
    {products.map(product => (
      <TableRow key={product.id} data={product} columns={columns}/>
    ))}
    </tbody>
  </table>
);
