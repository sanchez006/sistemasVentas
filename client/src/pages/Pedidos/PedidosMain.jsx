//PedidosMain.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchInput } from '../../components/SearchInput.jsx'
import { Button } from '../../components/Button.jsx'
import { Modal } from '../../components/Modal/Modal.jsx'

export const PedidosMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [refreshTable, setRefreshTable] = useState(false);
  const [searchValue, setSearchValue] = useState(''); //Valor del input de búsqueda

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleNewPedido = () => {
    // Abre el modal al hacer clic en "Nuevo Producto"
    setIsModalOpen(true);
    navigate('/pedidos/registrarPedido');
  };

  const handleCloseModal = () => {
    // Cierra el modal
    setIsModalOpen(false);
    setRefreshTable(!refreshTable); //Cambiar el estado para actualizar la tabla
    navigate('/pedidos');
  };

  const fields = [
    {
      name: 'nombre',
      type: 'text',
      placeholder: 'Nombre',
      label: 'Nombre',
      required: true,
      fullWidth: true
    },
    {
      name: 'codigo',
      type: 'text',
      placeholder: 'Código',
      label: 'Código',
      required: true,
      fullWidth: false
    },
    {
      name: 'precio',
      type: 'number',
      placeholder: 'Precio',
      label: 'Precio',
      required: true,
      fullWidth: false
    },
    {
      name: 'descripcion',
      type: 'text',
      placeholder: 'Descripción',
      label: 'Descripción',
      required: true,
      fullWidth: true
    }
  ];

  return (
    <>
      <div className="relative p-5 overflow-x-auto shadow-md sm:rounded-lg">
        <div className=" flex-col sm:flex-row flex-wrap sm:space-x-4 items-center justify-between pb-4">
          {/*<div className="mb-4 sm:mb-0">*/}
          {/* FILTRO */}
          {/*<DropdownFilter/>*/}
          {/* FIN FILTRO */}
          {/*</div>*/}
          <div className="flex gap-4">
            {/* BÚSQUEDA */}
            <SearchInput
              label="Buscar Pedido"
              id="searchPedido"
              onSearch={handleSearch}
            />
            {/* FIN BÚSQUEDA */}

            {/* BOTÓN */}
            <Button
              onClick={handleNewPedido}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            > Nuevo Pedido
            </Button>
            {/* FIN BOTÓN */}
          </div>
        </div>
        <div className="mb-4 sm:mb-0">
          {/* TABLA */}

          {/* FIN TABLA */}
        </div>
      </div>

      {/* MODAL */}
      <div className="justify-center items-center">
        <Modal isOpen={isModalOpen}
               onClose={handleCloseModal}
               fields={fields}
               endpoint="http://localhost:3001/productos/registrarProductos"
               labelTitle={"Nuevo Pedido"}
               labelBoton={"Realizar Pedido"}
               method={'POST'}
               refreshTable={() => setRefreshTable(!refreshTable)}
        />
      </div>

      {/* FIN MODAL */}
    </>
  )
}
