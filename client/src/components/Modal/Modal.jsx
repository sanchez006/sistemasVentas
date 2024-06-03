//Modal.jsx
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { errorAlert } from '../sweetAlert.js';
import { InputFloat, LabelFloat } from '../InputFloatLabel.jsx'

export const Modal = ({ isOpen, onClose, fields, endpoint, labelBoton, labelTitle, initialValues }) => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm(
    { defaultValues: initialValues }
  );
  const {formValues, setFormValues} = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
     ...formValues,
      [name]: value,
    });
  }

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
      const response = await axios.post(endpoint, formData, handleChange);
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
      console.error('Error al realizar el registro:', error);
      errorAlert(
        'Error',
        'No se pudo realizar el registro.',
        'error',
        2000,
        false,
        'Aceptar',
        ''
      );
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div id="crud-modal" tabIndex="-1" aria-hidden="true" aria-labelledby="modal-title"
             className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="relative">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {labelTitle}
                </h3>
                <button onClick={onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="crud-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Cerrar modal</span>
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  {fields.map((field, index) => (
                    <div key={index} className={`col-span-2 ${field.fullWidth ? '' : 'sm:col-span-1'}`}>
                      <div className="relative">
                        <InputFloat name={field.name}
                                    type={field.type}
                                    placeHolder={field.placeholder}
                                    register={register}
                        >
                          <LabelFloat text={field.label} />
                        </InputFloat>
                        {errors[field.name] && <span className="text-red-500">{errors[field.name].message}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                <button type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"></path>
                  </svg>
                  {labelBoton}
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
  labelTitle: PropTypes.string.isRequired,
  labelBoton: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      required: PropTypes.bool,
      fullWidth: PropTypes.bool,
      defaultValue: PropTypes.string.isRequired,
    })
  ).isRequired,
  endpoint: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
};
