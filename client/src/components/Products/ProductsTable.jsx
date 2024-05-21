import { Table } from '../Table/Table.jsx'

const products = [
  { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999', actions: ['View', 'Edit', 'Delete'] },
  { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999', actions: ['View', 'Edit', 'Delete'] },
  { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99', actions: ['View', 'Edit', 'Delete'] },
  { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179', actions: ['View', 'Edit', 'Delete'] },
  { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699', actions: ['View', 'Edit', 'Delete'] },
  { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999', actions: ['View', 'Edit', 'Delete'] },
];

const columns = {
  id: '#',
  name: 'Product name',
  color: 'Color',
  category: 'Category',
  price: 'Price',
  actions: 'Actions',
};

export const ProductsTable = () => {

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table columns={columns} products={products} />
      </div>
    </>

  );
};