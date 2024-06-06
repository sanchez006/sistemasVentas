
import { SearchInput } from '../SearchInput.jsx'
import { Button } from '../Button.jsx'
import { Modal } from '../Modal/Modal.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClientesTable } from './ClientesTable.jsx'


export const ClientesMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [refreshTable, setRefreshTable] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  }

  const handleNewCliente = () => {
    // Abre el modal al hacer clic en "Nuevo Producto"
    setIsModalOpen(true);
    navigate('/clientes/registrarCliente');
  };

  const handleCloseModal = () => {
    // Cierra el modal
    setIsModalOpen(false);
    setRefreshTable(!refreshTable);
    navigate('/clientes');
  };

  const fields = [
    {
      name: 'nombre',
      type: 'text',
      placeholder: 'Nombres',
      label: 'Nombres',
      required: true,
      fullWidth: false
    },
    {
      name: 'apellido',
      type: 'text',
      placeholder: 'Apellidos',
      label: 'Apellidos',
      required: true,
      fullWidth: false
    },
    {
      name: 'nit',
      type: 'text',
      placeholder: 'NIT',
      label: 'NIT',
      required: true,
      fullWidth: true
    },
    {
      name: 'direccion',
      type: 'text',
      placeholder: 'Dirección',
      label: 'Dirección',
      required: true,
      fullWidth: true
    }
  ];

  return (
    <>
      <div className="relative p-5 overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex-col sm:flex-row flex-wrap sm:space-x-4 items-center justify-between pb-4">
          {/*<div className="mb-4 sm:mb-0">*/}
          {/* FILTRO */}
          {/*<DropdownFilter/>*/}
          {/* FIN FILTRO */}
          {/*</div>*/}
          <div className="flex gap-4">
            {/* BÚSQUEDA */}
            <SearchInput
              label="Buscar Cliente"
              id="searchCliente"
              onSearch={handleSearch}
            />
            {/* FIN BÚSQUEDA */}

            {/* BOTÓN */}
            <Button
              onClick={handleNewCliente}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            > Nuevo Cliente
            </Button>
            {/* FIN BOTÓN */}
          </div>
        </div>
        <div className="mb-4 sm:mb-0">
          {/* TABLA */}
          <ClientesTable
            key = {refreshTable}
            searchValue = {searchValue}
          />
          {/* FIN TABLA */}
        </div>
      </div>

      {/* MODAL */}
      <div className="justify-center items-center">
        <Modal isOpen={isModalOpen}
               onClose={handleCloseModal}
               fields={fields}
               endpoint="http://localhost:3001/clientes/registrarCliente"
               labelBoton={"Agregar Cliente"}
               labelTitle={"Nuevo Cliente"}
               method={'POST'}
               refreshTable={() => setRefreshTable(!refreshTable)}
        />
      </div>

      {/* FIN MODAL */}
    </>
  )
}