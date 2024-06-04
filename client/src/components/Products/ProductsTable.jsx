//ProductsTable.jsx
import { Table } from '../Table/Table.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal/Modal.jsx'

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true); //Abrir el modal al hacer click en Editar
  }

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
             onEditClick={handleEditClick}
             onDelete={handleDelete}
      />

      {isModalOpen && selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          fields={[
            { name: 'nombre', type: 'text', placeholder: 'Nombre del producto', label: 'Nombre', fullWidth: true, defaultValue: selectedProduct ? selectedProduct.nombre : '', required: true },
            { name: 'codigo', type: 'text', placeholder: 'Código', label: 'Código', defaultValue: selectedProduct ? selectedProduct.codigo : '', required: true },
            { name: 'precio', type: 'number', placeholder: 'Precio', label: 'Precio', defaultValue: selectedProduct ? selectedProduct.precio : '', required: true },
            { name: 'descripcion', type: 'text', placeholder: 'Descripción', label: 'Descripción', fullWidth: true, defaultValue: selectedProduct ? selectedProduct.descripcion : '', required: false },
          ]}
          endpoint={selectedProduct ? `http://localhost:3001/productos/editarProducto/${selectedProduct.id}` : 'http://localhost:3001/productos/crearProducto'}
          labelBoton={selectedProduct ? 'Actualizar' : 'Crear'}
          labelTitle={selectedProduct ? 'Editar Producto' : 'Crear Producto'}
          initialValues={selectedProduct || {}}
          method={selectedProduct ? 'PUT' : 'POST'}
        />
      )}
    </div>
  )
};
