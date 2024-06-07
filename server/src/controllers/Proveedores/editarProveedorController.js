const db = require('../../config/dbConfig');

function editarProveedorController (editProveedor, id) {
  return new Promise((resolve, reject) => {

    //VERIFICAR CAMPOS OBLIGATORIOS Y VALORES VALIDOS
    if (!editProveedor ||!editProveedor.nombre ||!editProveedor.direccion ||!editProveedor.nit ||!editProveedor.telefono ||!editProveedor.correoElectronico) {
      resolve({
        title: 'Error.',
        message: 'Uno o varios campos vacios.',
        icon: 'error',
        showCancelButton: false,
        confirmButton: 'Ok'
      })
    }

    //VERIFICAR SI YA EXISTE UN PROVEEDOR CON EL MISMO NIT
    const checkProveedor = 'SELECT * FROM proveedores WHERE nit = ?';
    db.query(checkProveedor, [editProveedor.nit], (err, result) => {
      if (err) {
        console.error("Error al consultar en la tabla proveedores: ", err);
        reject({
          title: 'Error.',
          message: 'No se pudo consultar en la tabla proveedores.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
        return;
      }
      if (result && result.length > 0) {
        resolve({
          title: 'Error.',
          message: 'Ya existe un proveedor con el mismo NIT.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
        return;
      } else {
        //ACTUALIZAR EN LA BASE DE DATOS
        const query = `UPDATE proveedores SET ? WHERE id =?`;
        const values = [editProveedor, id];

        db.query(query, values, (err, result) => {
          if (err) {
            console.error("Error al actualizar el proveedor: ", err);
            reject({
              title: 'Error.',
              message: 'No se pudo actualizar el proveedor.',
              icon: 'error',
              showCancelButton: false,
              confirmButton: 'Ok'
            })
          } else {
            console.log("Transacción completada con éxito. Datos obtenidos: " + result);
            resolve({
              title: 'Proveedor actualizado.',
              message: 'El proveedor se actualizó correctamente.',
              icon:'success',
              showCancelButton: false,
              confirmButton: 'Ok'
            })
          }
        })
      }
    })
  })
}

module.exports = editarProveedorController;