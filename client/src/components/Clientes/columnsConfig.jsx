export const columns = [
  { field: 'id', header: 'ID', className: 'w-4 p-4' },
  { field: 'name', header: 'Nombre', className: 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white' },
  { field: 'color', header: 'Color', className: 'px-6 py-4' },
  { field: 'category', header: 'Categoría', className: 'px-6 py-4' },
  { field: 'price', header: 'Precio', className: 'px-6 py-4' },
  {
    field: 'actions',
    header: 'Acciones',
    className: 'px-6 py-4',
    render: (actions, data) => (
      Array.isArray(actions)
        ? actions.map((action, index) => (
          <a key={index} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">{action}</a>
        ))
        : <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">{actions}</a>
    )
  }
];