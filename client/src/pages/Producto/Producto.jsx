import { MainNav } from '../../components/Nav/MainNav.jsx';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { InputFloat, LabelFloat } from '../../components/InputFloatLabel.jsx';
import { errorAlert } from '../../components/sweetAlert.js';

export const Producto = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = async () => {
    const formData = getValues();

    try {
      const response = await axios.post('http://localhost:3001/productos', formData);
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
    } catch (error) {
      console.error('Error al registrar el producto:', error);
      console.log(getValues());
    }
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
        <MainNav />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <h1 className="text-2xl font-semibold dark:text-gray-50">Nuevo Producto</h1>
            </div>
            <div className="bg-white dark:bg-gray-800 px-5 py-5 shadow sm:rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <InputFloat
                      name="nombre"
                      id="nombre"
                      type="text"
                      placeHolder="Nombre del Producto"
                      register={register}
                    >
                      <LabelFloat text="Nombre del Producto" />
                    </InputFloat>
                    {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}
                  </div>

                  <div>
                    <InputFloat
                      name="precio"
                      id="precio"
                      type="number"
                      placeHolder="Precio del Producto"
                      register={register}
                    >
                      <LabelFloat text="Precio" />
                    </InputFloat>
                    {errors.precio && <span className="text-red-500">Este campo es requerido</span>}
                  </div>

                  <div>
                    <InputFloat
                      name="cantidad"
                      id="cantidad"
                      type="number"
                      placeHolder="Stock del Producto"
                      register={register}
                    >
                      <LabelFloat text="Cantidad" />
                    </InputFloat>
                    {errors.cantidad && <span className="text-red-500">Este campo es requerido</span>}
                  </div>
                </div>

                <div>
                  <InputFloat
                    name="descripcion"
                    id="descripcion"
                    type="text"
                    placeHolder="Descripción del Producto"
                    register={register}
                  >
                    <LabelFloat text="Descripción" />
                  </InputFloat>
                  {errors.descripcion && <span className="text-red-500">Este campo es requerido</span>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Registrar Producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};