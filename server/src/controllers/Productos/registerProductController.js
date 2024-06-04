const db = require('../../config/dbConfig');

function getRegisterProduct(product) {
  return new Promise((resolve, reject) => {

    //VERIFICAR CAMPOS VACIOS
    if (!product || Object.values(product).some(value => !value)){
      reject({message: 'Uno o varios campos vacíos'});
      return;
    }

    //INSERTAR EN LA BASE DE DATOS
    const registerProduct = 'INSERT INTO productos SET ?';

    db.query(registerProduct, product, (err, result) => {
      if (err) {
        console.error("Error al insertar en la tabla productos: ", err);
        reject(err);
      }
      else {
        const product_id = result.insertId;
        console.log("Producto insertado correctamente. ID: " + product_id);
        resolve({
          title: 'Éxito.',
          message: 'El producto se registró correctamente.',
          icon: 'success',
          showCancelButton: false,
          confirmButton: 'Ok',
          product: product_id});
      }
    })
  })
}

module.exports = getRegisterProduct
