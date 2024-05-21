import { MainNav } from '../../components/Nav/MainNav.jsx';
import { ProductsMain } from '../../components/Products/ProductsMain.jsx'

export const Producto = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full h-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
        <MainNav />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <ProductsMain />
          </div>
        </div>
      </div>
    </>
  )
}