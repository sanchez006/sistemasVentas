import { DropdownFilter } from '../Products/DropdownFilter.jsx'
import { SearchInput } from '../SearchInput.jsx'
import { Button } from '../Button.jsx'
import { ProveedoresTable } from './ProveedoresTable.jsx'
import { Modal } from '../Modal/Modal.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const ProveedorMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNewProveedor = () => {
    // Abre el modal al hacer clic en "Nuevo Producto"
    setIsModalOpen(true);
    navigate('/proveedores/registrarProveedor');
  };

  const handleCloseModal = () => {
    // Cierra el modal
    setIsModalOpen(false);
    navigate('/proveedores');
  };

  const fields = [
    {
      name: 'nombre',
      type: 'text',
      placeholder: 'Nombre completo',
      label: 'Nombre completo',
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
    },
    {
      name: 'telefono',
      type: 'phone',
      placeholder: 'Telefono',
      label: 'No. Telefono',
      required: true,
      fullWidth: true
    },
    {
      name: 'correoElectronico',
      type: 'email',
      placeholder: 'Correo Electronico',
      label: 'Correo Electronico',
      required: true,
      fullWidth: true
    }
  ];

  return (
    <>
      <div className="relative p-5 overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex flex-col sm:flex-row flex-wrap sm:space-x-4 items-center justify-between pb-4">
          <div className="mb-4 sm:mb-0">
            {/* FILTRO */}
            <DropdownFilter/>
            {/* FIN FILTRO */}
          </div>
          <div className="flex gap-4">
            {/* BÚSQUEDA */}
            <SearchInput
              label="Buscar Proveedor"
              id="searchProveedor"
            />
            {/* FIN BÚSQUEDA */}

            {/* BOTÓN */}
            <Button
              onClick={handleNewProveedor}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            > Nuevo Proveedor
            </Button>
            {/* FIN BOTÓN */}
          </div>
        </div>
        <div className="mb-4 sm:mb-0">
          {/* TABLA */}
          <ProveedoresTable/>
          {/* FIN TABLA */}
        </div>
      </div>

      {/* MODAL */}
      <div className="justify-center items-center">
      <Modal isOpen={isModalOpen}
             onClose={handleCloseModal}
             fields={fields}
             endpoint="http://localhost:3001/proveedores/registrarProveedor"
             labelBoton={"Agregar Proveedor"}
             labelTitle={"Nuevo Proveedor"}
             >
      </Modal>
      </div>

      {/* FIN MODAL */}
    </>
  )
}
