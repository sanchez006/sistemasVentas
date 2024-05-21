// LinkSidebar.jsx
import PropTypes from 'prop-types';

export const MultipleLinks = (props) => {
  const toggleDropdown = () => {
    const dropdown = document.getElementById('dropdown-example');
    dropdown.classList.toggle('hidden');
  };

  return (
    <>
      <li>
        <button type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"
                onClick={toggleDropdown}>
          <svg
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 23 23">
            <path clipRule="evenodd" fillRule="evenodd" d={props.dPath1}/>
            <path d={props.dPath2}/>
          </svg>
          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{props.nameLink}</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <ul id="dropdown-example" className="hidden py-2 space-y-2">
          {props.menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}
                 className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}

export const SimpleLink = (props) => {
  return (
    <>
      <li>
        <a href={props.href}
           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 23 23">
            <path clipRule="evenodd" fillRule="evenodd" d={props.dPath1}/>
            <path d={props.dPath2}/>
          </svg>
          <span className="ms-3">{props.nameLink}</span>
        </a>
      </li>
    </>
  )
}

MultipleLinks.propTypes = {
  nameLink: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string
  })),
  dPath1: PropTypes.string,
  dPath2: PropTypes.string
};

SimpleLink.propTypes = {
  href: PropTypes.string,
  dPath1: PropTypes.string,
  dPath2: PropTypes.string,
  nameLink: PropTypes.string
};