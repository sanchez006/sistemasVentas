import '../App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const UserLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/login', data)
      console.log('Respuesta del servidor: ', response.data)
    } catch (error) {
      console.error('Error al iniciar sesión: ', error)
    }
  }

  return (
    <>
      <div className="App">
        <h1 className="text-3xl">BIENVENIDOS</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Correo Electrónico:</label>
            <input
                type="email"
                {...register('correo_electronico')}
            />
            {errors.correo_electronico && <span>Este campo es requerido</span>}
          </div>
          <div>
            <label>Contraseña:</label>
            <input
                type="password"
                {...register('contrasenia')}
            />
            {errors.contrasenia && <span>Este campo es requerido</span>}
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
      </>
  )}
