import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropsTypes from 'prop-types'
import axios from 'axios'
import { Table } from '../Table/Table.jsx'
import { Modal } from '../Modal/Modal.jsx'

const columns = [
  { header: 'No.', accessor: 'correlativo' },
  { header: 'Nombres', accessor: 'nombre' },
  { header: 'Apellidos', accessor: 'apellido' },
  { header: 'NIT', accessor: 'nit' },
  { header: 'Dirección', accessor: 'direccion' },
];

export const ClientesTable = ({searchValue}) => {
  const [clientes, setClientes] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedCliente, setSelectedCliente] = useState(null)
  const navigate = useNavigate()

  //Filtrar cliente segùn el valor de busqueda
  const filteredClient = clientes.filter(
    cliente =>
      cliente.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
      cliente.nit.toLowerCase().includes(searchValue.toLowerCase())
  )

  //Mostrar todos los clientes si no hay termino de ubusqueda
  const displayedClientes = searchValue ? filteredClient : clientes;

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/clientes/listarClientes');
      const clientesWithCorrelativo = response.data.map((cliente, index) => ({
        ...cliente,
        correlativo: index + 1
      }))
      setClientes(clientesWithCorrelativo);
    } catch (error){
      console.error('Error al obtener los productos: ', error);
    }
  }

  useEffect(() => {
    fetchClientes()
  }, [])

  const handleEditClick = (cliente) => {
    setSelectedCliente(cliente)
    setModalOpen(true)
    navigate(`/clientes/editarCliente/${cliente.id}`)
  }

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/clientes/eliminarCliente/${id}`)
      console.log(`Producto con ID: ${id} eliminado`, response.data)
      setClientes(prevClientes => {
        return prevClientes.filter(cliente => cliente.id !== id).map((cliente, index) => ({
          ...cliente,
          correlativo: index + 1
        }))
      })
    } catch (error) {
      console.error('Error al eliminar el cliente: ', error)
    }
  }

  const handleModalClose = () => {
    setSelectedCliente(null);
    setModalOpen(false)
    fetchClientes();
    navigate('/clientes')
  }

  return (
    <div>
      <Table columns={columns}
             data={displayedClientes}
             onEditClick={handleEditClick}
             onDelete={handleDeleteClick}
      />

      {isModalOpen && selectedCliente && (
        <Modal isOpen={isModalOpen}
               onClose={handleModalClose}
               fields={[
                 {name: 'nombre', type: 'text', placeholder: 'Nombres', label: 'Nombres', fullWidth: false, defaultValue: selectedCliente ? selectedCliente.nombre : '', required: true},
                 {name: 'apellido', type: 'text', placeholder: 'Apellidos', label: 'Apellidos', fullWidth: false, defaultValue: selectedCliente ? selectedCliente.apellido : '', required: true},
                 {name: 'nit', type: 'text', placeholder: 'NIT', label: 'NIT', fullWidth: false, defaultValue: selectedCliente ? selectedCliente.nit : '', required: true},
                 {name: 'direccion', type: 'text', placeholder: 'Direccion', label: 'Direccion', fullWidth: false, defaultValue: selectedCliente ? selectedCliente.direccion : '', required: true}
               ]}
               endpoint={selectedCliente ? `http//localhost:3001/clientes/editarCliente/${selectedCliente.id}` : 'http://localhost:3001/clientes/registrarCliente'}
               labelBoton = {selectedCliente ? 'Actualizar' : 'Crear'}
               labelTitle = {selectedCliente ? 'Editar Cliente' : 'Crear Cliente'}
               initialValues={selectedCliente || {}}
               method = {selectedCliente ? 'PUT' : 'POST'}
               refreshTable = {fetchClientes}
        />
      )}
    </div>
  )
}

ClientesTable.propTypes = {
  searchValue: PropsTypes.string
}
