import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const ViewMode = () => {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const alternarTema = () => {
    setTemaOscuro(!temaOscuro);
  };

  useEffect(() => {
    if (temaOscuro === true) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [temaOscuro]);
  return (
    <button
      className={`m-4 float-end flex items-center px-4 py-2 rounded-lg focus:outline-none ${
        temaOscuro ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
      }`}
      onClick={alternarTema}
    >
      <FontAwesomeIcon icon={temaOscuro ? faSun : faMoon} className="mr-2"/>
      {temaOscuro ? '' : ''}
    </button>
  )
}
