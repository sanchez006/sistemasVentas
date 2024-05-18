import { useState, useEffect, useRef } from 'react';

export const DropdownUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <button onClick={toggleDropdown}
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-haspopup="true"
      >
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full"
             src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
             alt="user photo"
        />
      </button>
      {isOpen && (
        <div ref={dropdownRef}
             className="absolute right-0 mt-[17rem] w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-gray-700 dark:divide-gray-600"
             id="dropdown-user"
        >
          <div className="px-4 py-3">
            <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
              neil.sims@flowbite.com
            </p>
          </div>
          <ul className="py-1">
            <li>
              <a href="#"
                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              > Dashboard
              </a>
            </li>
            <li>
              <a href="#"
                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              > Settings
              </a>
            </li>
            <li>
              <a href="#"
                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              > Earnings
              </a>
            </li>
            <li>
              <a href="#"
                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              > Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
