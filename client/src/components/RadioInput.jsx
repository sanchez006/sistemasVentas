import typesProps from 'prop-types'

export const RadioInput = ({ id, value, checked, onChange, label }) => {
  return (
    <>
      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <input
          id={id}
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
               htmlFor={id}>{label}
        </label>
      </div>
    </>
  )
}

RadioInput.propTypes = {
  id: typesProps.string.isRequired,
  value: typesProps.string.isRequired,
  checked: typesProps.bool.isRequired,
  onChange: typesProps.func.isRequired,
  label: typesProps.string.isRequired,
}
