import '../../App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { ViewMode } from '../../components/ViewMode.jsx'
import { LabelFloat } from '../../components/InputFloatLabel.jsx'
import { errorAlert } from '../../components/sweetAlert.js'

export const UserLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/login', data)
      console.log('Respuesta del servidor: ', response.data)
      errorAlert(
        response.data.title,
        response.data.message,
        response.data.icon,
        2000,
        response.data.showCancelButton,
        response.data.confirmButton,
        response.data.cancelButton,
      )
    } catch (error) {
      console.error('Error al iniciar sesión: ', error)
      errorAlert('Error en el servidor', 'error', 2000)
    }
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <ViewMode/>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                 alt="logo"/>
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Iniciar Sesión
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                <div className="relative">
                  <input
                    type="email"
                    className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-"
                    placeholder="Correo electrónico"
                    id="correo_electronico"
                    name="correo_electronico"
                    {...register('correo_electronico')}
                  />
                  {errors.correo_electronico && <span className="text-red-500">Este campo es requerido</span>}
                  <LabelFloat text='Correo electrónico'/>
                </div>
                <div className="relative">
                  <input
                    className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-"
                    placeholder="contrasenia"
                    type="password"
                    id="contrasenia"
                    name="contrasenia"
                    {...register('contrasenia')}
                  />
                  {errors.contrasenia && <span className="text-red-500">Este campo es requerido</span>}
                  <LabelFloat text='Contraseña'/>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox"
                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                             required=""/>
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recuérdame</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Olvidé mi contraseña
                  </a>
                </div>
                <input type="submit" value="Entrar"
                       className="w-full text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  No tengo una cuenta, deseo <a href="http://localhost:5173/register"
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrarme</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
