import '../../App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
// Initialization for ES Users
import {Input, Ripple, initTWE,} from 'tw-elements';
import { LabelFloat } from "../../components/InputFloatLabel.jsx"
import { ViewMode } from '../../components/ViewMode.jsx'
import { errorAlert } from '../../components/sweetAlert.js'

initTWE({ Input, Ripple });

export const RegisterUser = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const addUser = async () => {
    const formData = getValues();

    //Verificar que coincidan las contraseñas
    if (formData.contrasenia !== formData.confirmar_contrasenia) {
      console.error("Las contraseñas no coinciden.");
      errorAlert(
        "Error",
        "Las contraseñas no coinciden.",
        "error",
        2000,
        false,
        "OK"
      );
      console.log(formData.confirmar_contrasenia)
      return;
    }

    //Verificar campos vacíos
    if (Object.values(formData).some(value => !value)){
      console.error("Uno o varios campos están vacíos.");
      errorAlert(
        "Error",
        "Uno o varios campos están vacíos.",
        "error",
        2000,
        false,
        "OK"
      );
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      console.log('Respuesta del servidor: ', response.data)
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
      console.error('Error al enviar los datos al servidor: ', error)
      console.log(getValues())
    }
  }

  return (
      <>
        <section className="bg-gray-50 dark:bg-gray-900">
          <ViewMode />
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                   alt="logo"/>
              Flowbite
            </a>
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
                </h1>
                <form onSubmit={handleSubmit(addUser)} className="space-y-4 md:space-y-6" action="#">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-tranparent"
                        placeholder = "Nombres"
                        type="text"
                        id="nombres"
                        name="nombres"
                        {...register('nombres')}
                      />
                      {errors.nombres && <span className="text-red-500">Este campo es requerido</span>}
                      <LabelFloat text={"Nombres"}/>
                    </div>
                    <div className="relative">
                      <input
                        className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-tranparent"
                        placeholder="apellidos"
                        type="text"
                        id="apellidos"
                        name="apellidos"
                        {...register('apellidos')}
                      />
                      {errors.apellidos && <span className="text-red-500">Este campo es requerido</span>}
                      <LabelFloat text={"Apellidos"}/>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-tranparent"
                      placeholder = "Dirección"
                      type="text"
                      id="direccion"
                      name="direccion"
                      {...register('direccion')}
                    />
                    {errors.direccion && <span className="text-red-500">Este campo es requerido</span>}
                    <LabelFloat text={"Dirección"}/>
                  </div>
                  <div className="relative">
                    <input
                      className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-tranparent"
                      placeholder = "Teléfono"
                      type="number"
                      id="telefono"
                      name="telefono"
                      {...register('telefono')}
                    />
                    {errors.telefono && <span className="text-red-500">Este campo es requerido</span>}
                    <LabelFloat text={"Teléfono"}/>
                  </div>
                  <div className="relative">
                    <input
                      className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-tranparent"
                      placeholder="correo_electronico"
                      type="email"
                      id="correo_electronico"
                      name="correo_electronico"
                      {...register('correo_electronico')}
                    />
                    {errors.correo_electronico && <span className="text-red-500">Este campo es requerido</span>}
                    <LabelFloat text={"Correo Electrónico"}/>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-tranparent"
                        placeholder="contrasenia"
                        type="password"
                        id="contrasenia"
                        name="contrasenia"
                        {...register('contrasenia')}
                      />
                      {errors.contrasenia && <span className="text-red-500">Este campo es requerido</span>}
                      <LabelFloat text={"Contraseña"}/>
                    </div>
                    <div className="relative">
                      <input
                        className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-tranparent"
                        placeholder="Confirmar Contraseña"
                        type="password"
                        id="confirmar_contrasenia"
                        name="confirmar_contrasenia"
                        {...register('confirmar_contrasenia')}
                      />
                      <LabelFloat text={"Confirmar Contraseña"}/>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input type="checkbox" id="miCheckbox"
                             className="form-checkbox h-5 w-5 text-indigo-600 dark:bg-gray-800 dark:opacity-[0.3] dark:checked:bg-blue-900 dark:checked:opacity-1"/>
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Acepto los <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terminos y Condiciones.</a></label>
                    </div>
                  </div>

                  <input type="submit"
                         value="Registrarse"
                         className="w-full text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  />

                  <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                    Tengo una cuenta, deseo <a href="http://localhost:5173/"
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">Iniciar
                    Sesión</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}
