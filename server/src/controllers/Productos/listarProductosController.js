const db = require('../../config/dbConfig')

function getListarProductos() {
return new Promise((resolve, reject) => {
    const listarProductos = 'SELECT * FROM productos'

    db.query(listarProductos, (err, result) => {
      if (err) {
        console.error("Error al obtener los productos: ", err)
        reject(err)
      }
      else {
        resolve(result)
      }
    })
  })
}

module.exports = getListarProductos