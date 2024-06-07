//editarProveedorController.js es el encargado de editar un producto en la base de datos
const db = require('../../config/dbConfig')

function editarProductoController (editProducto, id) {
  return new Promise((resolve, reject) => {

    //VERIFICAR CAMPOS OBLIGATORIOS Y VALORES VALIDOS
    if (!editProducto || editProducto.nombre || editProducto.codigo || editProducto.precio || editProducto.descripcion) {
      resolve({
        title: "Error",
        message: "Uno o varios campos vacios",
        icon: "error",
        showCancelButton: false,
        confirmButton: "Ok",
      })
    }

    //VERIFICAR SI YA EXISTE UN PRODUCTO CON EL MISMO CODIGO
    const checkProducto = 'SELECT * FROM productos WHERE codigo = ?';
    db.query(checkProducto, [editProducto.codigo], (err, result) =>{
      if(err){
        console.error("Error al consultar en la tabla Productos: ", err);
        reject({
          title: 'Error.',
          message: 'No se pudo consultar en la tabla Productos',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
        return;
      }
      if(result && result.lenghth > 0){
        resolve({
          title: 'Error',
          message: 'Ya existe un producto con el mismo código.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
        return;
      } else {
        //ACTUALIZAR EN LA BASE DE DATOS
        const query = `UPDATE productos SET ? WHERE id = ?`;
        const values = [editProducto, id];

        db.query(query, values, (err, result) => {
          if (err) {
            console.error("Error al actualizar el producto: ", err);
            reject({
              title: "Error",
              message: 'No se pudo registrar el producto.',
              icon: "error",
              showCnacelButton: false,
              confirmButton: 'Ok',
            });
          } else {
            console.log('Producto editado:', result);
            resolve({
              title: 'Éxito',
              message: 'Producto actualizado exitosamente',
              icon: 'success',
              showCancelButton: false,
              confirmButton: 'Ok',
            });
          }
        })
      }
    })
  })
}

module.exports = editarProductoController
