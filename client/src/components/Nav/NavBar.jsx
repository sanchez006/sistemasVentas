//COMPONENETE NAVBAR
import { ViewMode } from '../ViewMode.jsx'
import { DropdownUser } from './DropdownUser.jsx'
import { Sidebar } from './Sidebar/Sidebar.jsx'
import { ButtonSidebar } from './Sidebar/ButtonSidebar.jsx'
import { useState } from 'react'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">

              {/* <!-- SE UTILIZA EL COMPONENTE DEL BOTON SIDEBAR AL HACER CLICK --> */}
              <ButtonSidebar clickSidebar={toggleSidebar}/>
              {/* <!-- END BOTON SIDEBAR --> */}
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo"/>
                <span
                  className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
            </div>
            {/* <!-- VIEW MODE --> */}
            <ViewMode/>
            {/* <!-- END VIEW MODE --> */}
            {/* <!-- DROPDOWN USER --> */}
            <DropdownUser/>
            {/* <!-- END DROPDOWN USER --> */}

          </div>
        </div>
      </nav>
      {/* <!-- SIDEBAR --> */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {/* <!-- END SIDEBAR --> */}
      <ButtonSidebar clickSidebar={toggleSidebar}/>
    </>
  )
}
