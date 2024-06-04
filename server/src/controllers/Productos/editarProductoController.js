//editarProductoController.js es el encargado de editar un producto en la base de datos
const db = require('../../config/dbConfig')

function editarProductoController (req, res) {
  return new Promise((resolve, reject) => {
    const { id } = req.params;
    const { nombre, codigo, precio, descripcion } = req.body;

    //VERIFICAR CAMPOS VACIOS
    if (!nombre || !codigo || !precio || !descripcion) {
      reject({message: 'Uno o varios campos vacíos'});
      return;
    }

    //INSERTAR EN LA BASE DE DATOS
    const query = `UPDATE productos SET nombre = ?, codigo = ?, precio = ?, descripcion = ? WHERE id = ?`;
    const values = [nombre, codigo, precio, descripcion, id];

    db.query(query, values, (err, result) => {
      if (err) {
        console.error("Error al actualizar el producto: ", err);
        reject(err);
      }

      if (result.affectedRows === 0) {
        console.error('Producto no encontrado');
        return res.status(404).json({message:'Producto no encontrado'});
      }

      console.log('Producto editado:', result);
      res.status(200).json({
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
