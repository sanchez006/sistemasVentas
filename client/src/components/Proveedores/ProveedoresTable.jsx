import { Table } from '../Table/Table'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Modal } from '../Modal/Modal.jsx'
import { useNavigate } from 'react-router-dom'
import PropsTypes from 'prop-types'

const columns = [
  { header: 'No.', accessor: 'correlativo' },
  { header: 'Nombre del proveedor', accessor: 'nombre' },
  { header: 'Dirección', accessor: 'direccion' },
  { header: 'NIT', accessor: 'nit' },
  { header: 'Teléfono', accessor: 'telefono' },
  { header: 'Correo Electrónico', accessor: 'correoElectronico' },
]

export const ProveedoresTable = ({searchValue}) => {
  const [proveedores, setProveedores] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedProveedor, setSelectedProveedor] = useState(null)
  const navigate = useNavigate()

  //Filtrar proveedor según valor de búsqueda
  const filteredProveedores = proveedores.filter(
    proveedor =>
      proveedor.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
      proveedor.id.toLowerCase().includes(searchValue.toLowerCase())
  )

  //Mostrar todos los proveedores si no hay termino de busqueda
  const displayProveedores = searchValue ? filteredProveedores : proveedores;

  const fetchProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:3001/proveedores/listarProveedores');
      const proveedoresWithCorrelativo = response.data.map((proveedor, index) => ({
        ...proveedor,
          correlativo: index + 1
      }))
      setProveedores(proveedoresWithCorrelativo);
    } catch (error){
      console.error('Error al obtener los producto: ', error)
    }
  }

  useEffect(() => {
    fetchProveedores()
  }, [])

  const handleEditClick = (proveedor) => {
    setSelectedProveedor(proveedor);
    setModalOpen(true);
    navigate(`/proveedores/editarProveedor/${proveedor.id}`)
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/proveedores/eliminarProveedor/${id}`);
      console.log(`Proveedor con ID ${id} eliminado`, response.data);
      setProveedores(prevProveedores =>{
        return prevProveedores.filter(proveedor => proveedor.id !== id).map((proveedor, index) => ({
          ...proveedor,
          correlativo: index + 1
        }))
      })
    } catch (error) {
      console.error('Error al eliminar el proveedor: ', error)
    }
  }

  const handleModalClose = () => {
    setSelectedProveedor(null);
    setModalOpen(false);
    fetchProveedores();
    navigate('/proveedores');
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table columns={columns}
               data={displayProveedores}
               onEditClick={handleEditClick}
               onDelete={handleDelete}
        />

        {isModalOpen && selectedProveedor && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            fields={[
              { name: 'nombre', type: 'text', placeholder: 'Nombre del proveedor', label: 'Nombre', fullWidth: true, defaultValue: selectedProveedor? selectedProveedor.nombre : '', required: true },
              { name: 'direccion', type: 'text', placeholder: 'Dirección', label: 'Dirección', fullWidth: true, defaultValue: selectedProveedor? selectedProveedor.direccion : '', required: true },
              { name: 'nit', type: 'text', placeholder: 'NIT', label: 'NIT', fullWidth: false, defaultValue: selectedProveedor? selectedProveedor.nit : '', required: true },
              { name: 'telefono', type: 'text', placeholder: 'Teléfono', label: 'Teléfono', fullWidth: false, defaultValue: selectedProveedor? selectedProveedor.telefono : '', required: true },
              { name: 'correoElectronico', type: 'text', placeholder: 'Correo Electrónico', label: 'Correo Electrónico', fullWidth: true, defaultValue: selectedProveedor? selectedProveedor.correoElectronico : '', required: true },
            ]}
            endpoint={selectedProveedor ? `http://localhost:3001/proveedores/editarProveedor/${selectedProveedor}.id` : 'http://localhost:3001/proveedores/registrarProveedor'}
            labelBoton={selectedProveedor? 'Actualizar' : 'Crear'}
            labelTitle={selectedProveedor? 'Editar Proveedor' : 'Crear Proveedor'}
            initialValues={selectedProveedor || {}}
            method={selectedProveedor? 'PUT' : 'POST'}
            refreshTable={fetchProveedores}
          />
        )}
      </div>
    </>
  )
}

ProveedoresTable.propTypes = {
  searchValue: PropsTypes.string
}