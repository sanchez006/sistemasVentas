//editarProductoController.js es el encargado de editar un producto en la base de datos
const db = require('../../config/dbConfig')

function editarProductoController (editProducto, id) {
  return new Promise((resolve, reject) => {

    //VERIFICAR CAMPOS VACIOS
    if (!editProducto || !id || Object.values(editProducto).some(value => !value)){
      const error = new Error('Uno o varios campos están vacíos');
      error.status = 400;
      reject(error);
      return;
    }

    //ACTUALIZAR EN LA BASE DE DATOS
    const query = `UPDATE productos SET ? WHERE id = ?`;
    const values = [editProducto, id];

    db.query(query, values, (err, result) => {
      if (err) {
        console.error("Error al actualizar el producto: ", err);
        reject(err);
        return;
      }

      if (result.affectedRows === 0) {
        const error = new Error('Producto no encontrado');
        error.status = 404;
        reject(error);
        return;
      }

      console.log('Producto editado:', result);
      resolve({
        title: 'Éxito',
        message: 'Producto actualizado exitosamente',
        icon: 'success',
        showCancelButton: false,
        confirmButton: 'Ok',
      });
    })
  })
}

module.exports = editarProductoController
