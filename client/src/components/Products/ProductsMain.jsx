import { useState } from 'react'
import { DropdownFilter } from './DropdownFilter.jsx';
import { SearchInput } from '../SearchInput.jsx';
import { Button } from '../Button.jsx';
import { ProductsTable } from './ProductsTable.jsx';
import { Modal } from '../Modal/Modal.jsx'
import { useNavigate } from 'react-router-dom';

export const ProductsMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNewProduct = () => {
    // Abre el modal al hacer clic en "Nuevo Producto"
    setIsModalOpen(true);
    navigate('/productos/registrarProductos');
  };

  const handleCloseModal = () => {
    // Cierra el modal
    setIsModalOpen(false);
    navigate('/productos');
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
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Accessories
                </th>
                <th scope="col" className="px-6 py-3">
                  Available
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Weight
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4">
                  3.0 lb.
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                  White
                </td>
                <td className="px-6 py-4">
                  Laptop PC
                </td>
                <td className="px-6 py-4">
                  No
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  $1999
                </td>
                <td className="px-6 py-4">
                  1.0 lb.
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                  Black
                </td>
                <td className="px-6 py-4">
                  Accessories
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  No
                </td>
                <td className="px-6 py-4">
                  $99
                </td>
                <td className="px-6 py-4">
                  0.2 lb.
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple Watch
                </th>
                <td className="px-6 py-4">
                  Black
                </td>
                <td className="px-6 py-4">
                  Watches
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  No
                </td>
                <td className="px-6 py-4">
                  $199
                </td>
                <td className="px-6 py-4">
                  0.12 lb.
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple iMac
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  PC
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4">
                  7.0 lb.
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple AirPods
                </th>
                <td className="px-6 py-4">
                  White
                </td>
                <td className="px-6 py-4">
                  Accessories
                </td>
                <td className="px-6 py-4">
                  No
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  $399
                </td>
                <td className="px-6 py-4">
                  38 g
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  iPad Pro
                </th>
                <td className="px-6 py-4">
                  Gold
                </td>
                <td className="px-6 py-4">
                  Tablet
                </td>
                <td className="px-6 py-4">
                  No
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  $699
                </td>
                <td className="px-6 py-4">
                  1.3 lb.
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Keyboard
                </th>
                <td className="px-6 py-4">
                  Black
                </td>
                <td className="px-6 py-4">
                  Accessories
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  $99
                </td>
                <td className="px-6 py-4">
                  453 g
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple TV 4K
                </th>
                <td className="px-6 py-4">
                  Black
                </td>
                <td className="px-6 py-4">
                  TV
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  No
                </td>
                <td className="px-6 py-4">
                  $179
                </td>
                <td className="px-6 py-4">
                  1.78 lb.
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  AirTag
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Accessories
                </td>
                <td className="px-6 py-4">
                  Yes
                </td>
                <td className="px-6 py-4">
                  No
                </td>
                <td className="px-6 py-4">
                  $29
                </td>
                <td className="px-6 py-4">
                  53 g
                </td>
                <td className="flex items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          {/* FIN TABLA */}
        </div>
      </div>

      {/* MODAL */}
      <div className="justify-center items-center">
        <Modal isOpen={isModalOpen}
               onClose={handleCloseModal}
               fields={fields}
               endpoint="http://localhost:3001/productos/registrarProductos"
               labelTitle={"Nuevo Producto"}
               labelBoton={"Agregar Producto"}
        />
      </div>

      {/* FIN MODAL */}
    </>
  );
};