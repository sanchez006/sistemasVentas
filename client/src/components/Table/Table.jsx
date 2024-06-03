//Table.jsx
import PropsTypes from 'prop-types'
import { TableRow } from './TableRow.jsx'
import { useState } from 'react'
import { Modal } from '../Modal/Modal.jsx'
import { TableHeader } from './TableHeader.jsx'

export const Table = ({ columns, data, onDelete }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRow(null);
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader columns={columns}/>
          <tbody>
            {data.map((row) => (
              <TableRow key={row.id}
                        row={row}
                        columns={columns}
                        onEdit={handleEditClick}
                        onDelete={onDelete}
                        selectedRow={selectedRow?.id === row.id}
                        onRowClick={handleRowClick}
              />
            ))}
          </tbody>
      </table>
      {selectedRow && isModalOpen && (
        <Modal onClose = {closeModal}
               isOpen={isModalOpen}
               fields={columns.map((col) =>({
                 name: col.accessor,
                 type: 'text',
                 placeholder: col.header,
                 label: col.header,
                 required: true,
                 fullWidth: true,
                 defaultValue: selectedRow[col.accessor],

               }))}
               endpoint={`http://localhost:3001/productos/editarProducto/${selectedRow.id}`}
               labelBoton={"Editar Producto"}
               labelTitle={"Editar Producto"}
               initialValues={selectedRow}
        />
      )}
    </div>
  )
}

Table.propTypes = {
  columns: PropsTypes.array.isRequired,
  data: PropsTypes.array.isRequired,
  onDelete: PropsTypes.func.isRequired
}
