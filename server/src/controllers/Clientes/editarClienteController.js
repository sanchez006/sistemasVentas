const db = require('../../config/dbConfig')

function editarClienteController (editCliente, id) {
  return new Promise ((resolve, reject) => {
    //VERIFICAR CAMPOS OBLIGATORIOS Y VALORES VACIOS
    if (!editCliente ||!id || Object.values(editCliente).some(value =>!value)){
      resolve({
        title: 'Error.',
        message: 'Uno o varios campos vacios.',
        icon: 'error',
        showCancelButton: false,
        confirmButton: 'Ok'
      })
    }

    //VERIFICAR SI YA EXISTE EL CLEINTE CON EL MIMSO NIT
    const checkCliente = 'SELECT * FROM clientes WHERE nit = ?';
    db.query(checkCliente, [editCliente.nit], (err, result) => {
      if (err) {
        console.error("Error al consultar en la tabla clientes: ", err);
        reject({
          title: 'Error.',
          message: 'Error al editar el cliente.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
      } else if (result && result.length > 0) {
        resolve({
          title: 'Error.',
          message: 'Ya existe un cliente con el mismo nit.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
      } else {
        //ACTUALIZAR EN LA BASE DE DATOS
        const query  = `UPDATE clientes SET ? WHERE id = ?`;
        const values = [editCliente, id];

        db.query(query, values, (err, result) => {
          if (err) {
            console.error("Error al actualizar clientes: ", err)
            reject({
              title: 'Error.',
              message: 'Error al editar el cliente.',
              icon: 'error',
              showCancelButton: false,
              confirmButton: 'Ok'
            })
          } else {
            console.log("Cliente actualizado correctamente.");
            resolve({
              title: 'Éxito.',
              message: 'El cliente se actualizó correctamente.',
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

module.exports = editarClienteController;
