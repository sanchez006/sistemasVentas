const db = require('../../config/dbConfig');

function listarProveedores() {
  return new Promise((resolve, reject) => {
    const listarProveedores = 'SELECT * FROM proveedores'

    db.query(listarProveedores, (err, result) => {
      if (err) {
        console.error("Error al obtener los proveedores: ", err)
        reject(err)
      }
      else {
        resolve(result)
      }
    })
  })
}

module.exports = listarProveedores