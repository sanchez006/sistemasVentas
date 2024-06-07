const db = require('../../config/dbConfig');

const getRegisterProveedor = (proveedor) => {
  return new Promise((resolve, reject) => {
    //VERIFICAR CAMPOS OBLIGATORIOS Y VALORES VALIDOS
    if (!proveedor || !proveedor.nombre || !proveedor.direccion || !proveedor.nit || !proveedor.telefono || !proveedor.correoElectronico) {
      resolve({
        title: 'Error.',
        message: 'Faltan campos obligatorios.',
        icon: 'error',
        showCancelButton: false,
        confirmButton: 'Ok'
      });
      return;
    }

    //VERIFICAR SI YA EXISTE UN PROVEEDOR CON EL MISMO CORREO
    const checkProveedor = 'SELECT * FROM proveedores WHERE nit = ?';
    db.query(checkProveedor, [proveedor.nit], (err, result) => {
      if (err) {
        console.error("Error al consultar en la tabla proveedores: ", err);
        reject({
          title: 'Error.',
          message: 'Error al registrar el producto.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
        return;
      }

      if (result && result.length > 0) {
        resolve({
          title: 'Error.',
          message: 'El proveedor ya existe.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        });
        return;
      } else {
        const registerProveedor = 'INSERT INTO proveedores SET ?';

        db.query(registerProveedor, proveedor, (err, result) => {
          if (err) {
            console.error("Error al registrar el proveedor: ", err);
            reject({
              title: 'Error.',
              message: 'Error al registrar el proveedor.',
              icon: 'error',
              showCancelButton: false,
              confirmButton: 'Ok'
            })
          } else {
            const product_id = result.insertId;
            console.log("Proveedor insertado correctamente. ID: " + product_id);
            resolve({
              title: 'Éxito.',
              message: 'El proveedor se registró correctamente.',
              icon:'success',
              showCancelButton: false,
              confirmButton: 'Ok',
              proveedor: result.insertId
            });
          }
        })
      }
    })
  })
}

module.exports = getRegisterProveedor