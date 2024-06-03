import { Table } from '../Table/Table.jsx'
import axios from 'axios'

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Nombre del producto', accessor: 'productName' },
  { header: 'Color', accessor: 'color' },
  { header: 'Categoría', accessor: 'category' },
  { header: 'Accesorios', accessor: 'accessories' },
  { header: 'Disponible', accessor: 'available' },
  { header: 'Precio', accessor: 'price' },
  { header: 'Peso', accessor: 'weight' },
];

const data = [
  {
    id: 1,
    productName: 'Apple MacBook Pro 17"',
    color: 'Plata',
    category: 'Portátil',
    accessories: 'Sí',
    available: 'Sí',
    price: '$2999',
    weight: '3.0 lb.',
  },
  {
    id: 2,
    productName: 'Microsoft Surface Pro',
    color: 'Blanco',
    category: 'PC Portátil',
    accessories: 'No',
    available: 'Sí',
    price: '$1999',
    weight: '1.0 lb.',
  },
  {
    id: 3,
    productName: 'Magic Mouse 2',
    color: 'Negro',
    category: 'Accesorios',
    accessories: 'Sí',
    available: 'No',
    price: '$99',
    weight: '0.2 lb.',
  },
  {
    id: 4,
    productName: 'Apple Watch',
    color: 'Negro',
    category: 'Relojes',
    accessories: 'Sí',
    available: 'No',
    price: '$199',
    weight: '0.12 lb.',
  },
  {
    id: 5,
    productName: 'Apple iMac',
    color: 'Plata',
    category: 'PC',
    accessories: 'Sí',
    available: 'Sí',
    price: '$2999',
    weight: '7.0 lb.',
  },
  {
    id: 6,
    productName: 'Apple AirPods',
    color: 'Blanco',
    category: 'Accesorios',
    accessories: 'No',
    available: 'Sí',
    price: '$399',
    weight: '38 g',
  },
  {
    id: 7,
    productName: 'iPad Pro',
    color: 'Dorado',
    category: 'Tableta',
    accessories: 'No',
    available: 'Sí',
    price: '$699',
    weight: '1.3 lb.',
  },
  {
    id: 8,
    productName: 'Magic Keyboard',
    color: 'Negro',
    category: 'Accesorios',
    accessories: 'Sí',
    available: 'Sí',
    price: '$99',
    weight: '453 g',
  },
  {
    id: 9,
    productName: 'Apple TV 4K',
    color: 'Negro',
    category: 'TV',
    accessories: 'Sí',
    available: 'No',
    price: '$179',
    weight: '1.78 lb.',
  },
  {
    id: 10,
    productName: 'AirTag',
    color: 'Plata',
    category: 'Accesorios',
    accessories: 'Sí',
    available: 'No',
    price: '$29',
    weight: '53 g',
  },
];

export const ProductsTable = () => {
  const handleEdit = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/productos/editarProducto/${id}`, {
        // Aquí puedes enviar los datos actualizados del producto
      });
      console.log('Producto actualizado:', response.data);
      // Aquí puedes actualizar el estado de tu aplicación si es necesario
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/productos/eliminarProducto/${id}`);
      console.log('Producto eliminado:', response.data);
      // Aquí puedes actualizar el estado de tu aplicación si es necesario
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  return(
    <div>
      <Table columns={columns}
             data={data}
             onEdit={handleEdit}
             onDelete={handleDelete}/>
    </div>
  )
};