import { Table } from '../Table/Table.jsx'

const products = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 30 },
];

const columns = [
  { header: 'ID', field: 'id' },
  { header: 'Nombre', field: 'name' },
  { header: 'Precio', field: 'price', render: (price) => `$${price}` }, // Ejemplo de función de renderizado personalizada
];

export const ProductsTable = () => {

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table products={products} columns={columns} />
      </div>
    </>

  );
};