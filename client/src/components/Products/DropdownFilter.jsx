import { useState, useEffect, useRef } from 'react';
import { RadioInput } from '../RadioInput.jsx';

const options = [
  { id: 'last-day', label: 'Último día', value: 'Último día' },
  { id: 'last-7-days', label: 'Últimos 7 días', value: 'Últimos 7 días' },
  { id: 'last-30-days', label: 'Últimos 30 días', value: 'Últimos 30 días' },
  { id: 'last-month', label: 'Último mes', value: 'Último mes' },
  { id: 'last-year', label: 'Último año', value: 'Último año' }
];

export const DropdownFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Últimos 30 días');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        id="dropdownRadioButton"
        onClick={toggleDropdown}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        {selectedOption}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          style={{ position: 'absolute' }}
        >
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
            {options.map(option => (
              <li key={option.id}>
                <RadioInput
                  onChange={() => handleOptionChange(option.value)}
                  checked={selectedOption === option.value} // Comparar el valor seleccionado con el valor de la opción
                  id={option.id}
                  label={option.label}
                  value={option.value}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
