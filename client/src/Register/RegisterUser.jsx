import '../App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
// Initialization for ES Users
import {
  Input,
  Ripple,
  initTWE,
} from 'tw-elements';

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
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                   alt="logo"/>
              Flowbite
            </a>
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
                </h1>
                <form onSubmit={handleSubmit(addUser)} className="space-y-4 md:space-y-6" action="#">
                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border bg-gray-700 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput2"
                        placeholder="Email address"/>
                    <label
                        htmlFor="exampleFormControlInput2"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >Email address
                    </label>
                  </div>

                  <div>
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required=""/>
                  </div>
                  <div>
                    <label htmlFor="confirm-password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                      password</label>
                    <input type="confirm-password" nameName="confirm-password" id="confirm-password"
                           placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required=""/>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="terms" aria-describedby="terms" type="checkbox"
                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                             required=""/>
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms
                        and Conditions</a></label>
                    </div>
                  </div>
                  <button type="submit"
                          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                    an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#"
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                    here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="App">
          <div className="datos">
            <form onSubmit={handleSubmit(addUser)}>
              <input
                  type="text"
                  placeholder="Nombres"
                  {...register('nombres')}
              />
              {errors.nombres && <span>Este campo es requerido</span>}
              <input
                  type="text"
                  placeholder="Apellidos"
                  name="apellidos"
                  {...register('apellidos')}
              />
              {errors.apellidos && <span>Este campo es requerido</span>}
              <input
                  type="text"
                  placeholder="Direccion"
                  name="direccion"
                  {...register('direccion')}
              />
              <input
                  type="number"
                  placeholder="Telefono"
                  name="telefono"
                  {...register('telefono')}
              />
              <input
                  type="email"
                  placeholder="Correo Electronico"
                  name="correo_electronico"
                  {...register('correo_electronico')}
              />
              <input
                  type="password"
                  placeholder="Contraseña"
                  name="contrasenia"
                  {...register('contrasenia')}
              />
              <input
                  type="submit" value="Enviar"/>
            </form>
          </div>
        </div>
      </>

  )
}
