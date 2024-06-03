const db = require('../../config/dbConfig')

function editarProductoController(product) {
  return new Promise((resolve, reject) => {
    if (!product || Object.values(product).some(value => !value)){
      reject({message: 'Uno o varios campos vacíos'});
      return;
    }

    const editarProducto = 'UPDATE productos SET ? WHERE id = ?';

    db.query(editarProducto, [product, product.id], (err, result) => {
      if (err) {
        console.error("Error al editar en la tabla productos: ", err);
        reject(err);
      }
      else {
        console.log("Producto editado correctamente. ID: " + product.id);
        resolve({
          title: 'Éxito.',
          message: 'El producto se editó correctamente.',
          icon: 'success',
          showCancelButton: false,
          confirmButton: 'Ok',
          product: product.id});
      }
    })
  })
}

module.exports = editarProductoController
