import PropTypes from 'prop-types';

export const InputFloat = ({ placeHolder, type, id, name, register, children }) => {
  return (
    <div className="relative">
      <input
        className="mt-0 h-12 peer w-full pt-7 p-3 text-lg bg-gray-50 border border-gray-300 placeholder-transparent rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeHolder}
        type={type}
        id={id}
        name={name}
        {...register(name, { required: true })}
      />
      {children}
    </div>
  );
}

InputFloat.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  children: PropTypes.node
}

export const LabelFloat = ({ text }) => {
  return (
    <label
      className="pointer-events-none absolute left-3 top-[0.1rem] text-gray-400 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-[0.1rem] peer-focus:text-gray-400 peer-focus:text-sm placeholder:text-transparent"
      htmlFor={text}
    >
      {text}
    </label>
  );
}

LabelFloat.propTypes = {
  text: PropTypes.string.isRequired,
}
