//Eliminar producto de la base de datos

const db = require('../../config/dbConfig')

function eliminarProductoController (id) {
  return new Promise((resolve, reject) => {
    const eliminarProducto = `DELETE FROM productos WHERE id = ${id}`

    db.query(eliminarProducto, (err, result) => {
      if (err) {
        console.error("Error al eliminar el producto: ", err)
        reject(err)
      }
      else {
        console.log('Producto editado:', result);
        resolve({
          title: 'Éxito',
          message: 'Producto eliminado exitosamente',
          icon: 'success',
          showCancelButton: false,
          confirmButton: 'Ok',
        });
      }
    })
  })
}

module.exports = eliminarProductoController