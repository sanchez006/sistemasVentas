import '../App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
// Initialization for ES Users
import {Input, Ripple, initTWE,} from 'tw-elements';
import {InputFloat, LabelFloat} from "../components/InputFloatLabel.jsx"
import { ViewMode } from '../components/ViewMode.jsx'

initTWE({ Input, Ripple });

export const RegisterUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const addUser = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/register', data)
      console.log('Respuesta del servidor: ', response.data)
    } catch (error) {
      console.error('Error al enviar los datos al servidor: ', error)
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
                      <InputFloat
                        Type="text"
                        id="nombres"
                        name="nombres"
                        placeHolder={"Nombres"}
                        {...register('nombres')}
                      />
                      <LabelFloat text={"Nombres"}/>
                    </div>
                    <div className="relative">
                      <InputFloat
                        Type="text"
                        id="apellidos"
                        name="apellidos"
                        placeHolder={"Apellidos"}
                        {...register('apellidos')}
                      />
                      <LabelFloat text={"Apellidos"}/>
                    </div>
                  </div>

                  <div className="relative">
                    <InputFloat
                      Type="text"
                      id="direccion"
                      name="direccion"
                      placeHolder={"Dirección"}
                      {...register('direccion')}
                    />
                    <LabelFloat text={"Dirección"}/>
                  </div>
                  <div className="relative">
                    <InputFloat
                      Type="number"
                      id="telefono"
                      name="telefono"
                      placeHolder={"Teléfono"}
                      {...register('telefono')}
                    />
                    <LabelFloat text={"Teléfono"}/>
                  </div>
                  <div className="relative">
                    <InputFloat
                      Type="email"
                      id="correo_electronico"
                      name="correo_electronico"
                      placeHolder={"Correo Electrónico"}
                      {...register('correo_electronico')}
                    />
                    <LabelFloat text={"Correo Electrónico"}/>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="relative">
                      <InputFloat
                        type='password'
                        id="contrasenia"
                        name="contrasenia"
                        placeHolder={"Contraseña"}
                        {...register('contrasenia')}
                      />
                      <LabelFloat text={"Contraseña"}/>
                    </div>
                    <div className="relative">
                      <InputFloat
                        type='password'
                        id="confirmar_contrasenia"
                        name="confirmar_contrasenia"
                        placeHolder={"Confirmar Contraseña"}
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

                  <input type="submit" value="Registrarse"
                         className="w-full text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  />
                  <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                    Tengo una cuenta, deseo <a href="#"
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
