//ProductsTable.jsx
import { Table } from '../Table/Table.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'

const columns = [
  { header: 'No.', accessor: 'id' },
  { header: 'Nombre del producto', accessor: 'nombre' },
  { header: 'Código', accessor: 'codigo' },
  { header: 'Precio', accessor: 'precio' },
  { header: 'Descripción', accessor: 'descripcion' },
  { header: 'Stock Actual', accessor: 'stockActual' },
];



export const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productos/listarProductos');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleEdit = async (id, updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:3001/productos/editarProducto/${id}`, updatedProduct);
      console.log('Producto actualizado:', response.data);
      // Actualiza el estado local con los datos actualizados
      setProducts(products.map(item => (item.id === id ? { ...item, ...updatedProduct } : item)));
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
             data={products}
             onEdit={handleEdit}
             onDelete={handleDelete}/>
    </div>
  )
};
