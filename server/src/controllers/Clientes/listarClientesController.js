const db = require('../../config/dbConfig')

function getListarClientes() {
  return new Promise((resolve, reject) => {
    const listarClientes = 'SELECT * FROM clientes'

    db.query(listarClientes, (err, result) => {
      if (err) {
        console.error("Error al obtener los clientes: ", err)
        reject(err)
      }
      else {
        resolve(result)
      }
    })
  })
}

module.exports = getListarClientes