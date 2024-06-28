const db = require('../../config/dbConfig');

function getRegisterProduct(product) {
  return new Promise((resolve, reject) => {

    //VERIFICAR CAMPOS OBLIGATORIOS Y VALORES VALIDOS
    if (!product || !product.nombre || !product.codigo || !product.precio || !product.descripcion) {
      resolve({
        title: 'Error.',
        message: 'Faltan campos obligatorios.',
        icon: 'error',
        showCancelButton: false,
        confirmButton: 'Ok'
      });
      return;
    }

    //VERIFICAR SI YA EXISTE UN PRODUCTO CON EL MISMO CODIGO
    const checkProduct = 'SELECT * FROM productos WHERE codigo = ?';
    db.query(checkProduct, [product.codigo], (err, result) => {
      if (err) {
        console.error("Error al consultar la tabla productos: ", err);
        reject({
          title: 'Error.',
          message: 'Error al registrar el producto.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        });
        return;
      }

      if (result && result.length > 0) {
        console.log("Ya existe un producto con el mismo código.");
        resolve({
          title: 'Error.',
          message: 'Ya existe un producto con el mismo código.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        });
        return;
      } else {
        console.log("No existe un producto con el mismo código.");
        //INSERTAR EN LA BASE DE DATOS
        const registerProduct = 'INSERT INTO productos SET ?';

        db.query(registerProduct, product, (err, result) => {
          if (err) {
            console.error("Error al insertar en la tabla productos: ", err);
            reject({
              title: 'Error.',
              message: 'Error al registrar el producto.',
              icon: 'error',
              showCancelButton: false,
              confirmButton: 'Ok'
            });
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
              product: { ...product, id: product_id}
            });
          }
        })
      }
    })
  })
}

module.exports = getRegisterProduct
