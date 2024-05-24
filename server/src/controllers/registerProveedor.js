const db = require('../config/dbConfig');

const getRegisterProveedor = (proveedor) => {
  return new Promise((resolve, reject) => {

    //VERIFICAR CAMPOS VACIOS
    if (!proveedor || Object.values(proveedor).some(value => !value)){
      reject({message: 'Uno o varios campos vacíos'});
      return;
    }

    //INSERTAR EN LA BASE DE DATOS
    const registerProveedor = 'INSERT INTO proveedores SET ?';

    db.query(registerProveedor, proveedor, (err, result) => {
      if (err) {
        console.error("Error al insertar en la tabla proveedores: ", err);
        reject(err);
      }
      else {
        const proveedor_id = result.insertId;
        console.log("Proveedor insertado correctamente. ID: " + proveedor_id);
        resolve({
          title: 'Éxito.',
          message: 'El proveedor se registró correctamente.',
          icon: 'success',
          showCancelButton: false,
          confirmButton: 'Ok',
          proveedor: proveedor_id});
      }
    })
  })
}

module.exports = getRegisterProveedor