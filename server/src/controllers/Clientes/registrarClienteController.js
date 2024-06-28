const db = require('../../config/dbConfig')

const getRegistrarCliente = (cliente) => {
  return new Promise((resolve, reject) => {
    //VERIFICAR CAMPOS OBLIGATORIOS Y VALORES VALIDOS
    if (!cliente || !cliente.nombre || !cliente.apellido || !cliente.nit || !cliente.direccion) {
      resolve({
        title: 'Error.',
        message: 'Faltan campos obligatorios.',
        icon: 'error',
        showCancelButton: false,
        confirmButton: 'Ok'
      })
      return;
    }

    //VERIFICAR QUE NO EXISTA UN CLIENTE CON EL MISMO NIT
    const checkCliente = 'SELECT * FROM clientes WHERE nit = ?';
    db.query(checkCliente, [cliente.nit], (err, result) => {
      if (err) {
        console.error("Error al consultar en la tabla clientes: ", err);
        reject({
          title: 'Error.',
          message: 'Error al registrar el cliente.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
        return;
      }
      if (result && result.length > 0) {
        console.log("Ya existe un cliente con el mismo nit.");
        resolve({
          title: 'Error.',
          message: 'Ya existe un cliente con el mismo nit.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
      } else {
        //INSERTAR EN LA BASE DE DATOS
        const registerCliente = 'INSERT INTO clientes SET ?';

        db.query(registerCliente, cliente, (err, result) => {
          if (err) {
            console.error("Error al registrar el cliente: ", err);
            reject({
              title: 'Error.',
              message: 'Error al registrar el cliente.',
              icon: 'error',
              showCancelButton: false,
              confirmButton: 'Ok'
            })
          } else {
            const cliente_id = result.insertId;
            console.log("Cliente insertado correctamente. ID: " + cliente_id);
            resolve({
              title: 'Exito.',
              message: 'Cliente registrado correctamente.',
              icon:'success',
              showCancelButton: false,
              confirmButton: 'Ok',
              cliente: result.insertId
            })
          }
        })
      }
    })
  })
}

module.exports = getRegistrarCliente