import { useState } from 'react';
import { DropdownFilter } from './DropdownFilter.jsx';
import { SearchInput } from '../SearchInput.jsx';
import { Button } from '../Button.jsx';
import { ProductsTable } from './ProductsTable.jsx';
import { Modal } from '../Modal/Modal.jsx'

export const ProductsMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewProduct = () => {
    // Abre el modal al hacer clic en "Nuevo Producto"
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Cierra el modal
    setIsModalOpen(false);
  };

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
              label="Buscar Producto"
              id="search"
            />
            {/* FIN BÚSQUEDA */}

            {/* BOTÓN */}
            <Button
              onClick={handleNewProduct}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            > Nuevo Producto
            </Button>
            {/* FIN BOTÓN */}
          </div>
        </div>
        <div className="mb-4 sm:mb-0">
          {/* TABLA */}
          <ProductsTable/>
          {/* FIN TABLA */}
        </div>
      </div>

      {/* MODAL */}
      <div className="justify-center items-center">
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
      </div>

      {/* FIN MODAL */}
    </>
  );
};