import PropTypes from 'prop-types';
import { Button } from '../Button.jsx';
import { InputFloat, LabelFloat } from '../InputFloatLabel.jsx';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { errorAlert } from '../sweetAlert.js';
import { useEffect } from 'react';

export const Modal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    } else {
      window.removeEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const onSubmit = async () => {
    const formData = getValues();

    try {
      const response = await axios.post('http://localhost:3001/productos/registrarProductos', formData);
      console.log('Respuesta del servidor: ', response.data);
      errorAlert(
        response.data.title,
        response.data.message,
        response.data.icon,
        2000,
        response.data.showCancelButton,
        response.data.confirmButton,
        response.data.cancelButton,
      );
      reset();
      onClose();
    } catch (error) {
      console.error('Error al registrar el producto:', error);
      errorAlert(
        'Error',
        'No se pudo registrar el producto',
        'error',
        2000,
        false,
        'Aceptar',
        ''
      );
    }
  };

  return (
    <>
      {isOpen && (
        <div id="crud-modal" tabIndex="-1" aria-hidden="true" aria-labelledby="modal-title"
             className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="relative">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Crear Nuevo Producto
                </h3>
                <Button onClick={onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="crud-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Cerrar modal</span>
                </Button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <InputFloat name={"Nombre"}
                                id={"nombre"}
                                type={"text"}
                                placeHolder={"Nombre"}
                                register={register}>
                      <LabelFloat text="Nombre" />
                    </InputFloat>
                    {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <InputFloat name="codigo"
                                id="codigo"
                                type="text"
                                placeHolder="Código"
                                register={register}>
                      <LabelFloat text="Código"/>
                    </InputFloat>
                    {errors.codigo && <span className="text-red-500">{errors.codigo.message}</span>}
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <InputFloat name="precio"
                                id="precio"
                                type="number"
                                placeHolder="Precio"
                                register={register}>
                      <LabelFloat text="Precio"/>
                    </InputFloat>
                    {errors.precio && <span className="text-red-500">{errors.precio.message}</span>}
                  </div>
                  <div className="col-span-2">
                    <InputFloat name="descripcion"
                                id="descripcion"
                                type="text"
                                placeHolder="Descripción del producto"
                                register={register}>
                      <LabelFloat text="Descripción del producto"/>
                    </InputFloat>
                    {errors.descripcion && <span className="text-red-500">{errors.descripcion.message}</span>}
                  </div>
                </div>
                <button type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"></path>
                  </svg>
                  Agregar producto
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
