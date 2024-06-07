//Eliminar producto de la base de datos

const db = require('../../config/dbConfig')

function eliminarProductoController (id) {
  return new Promise((resolve, reject) => {

    //Eliminar el producto
    const eliminarProducto = `DELETE FROM productos WHERE id = ${id}`

    db.query(eliminarProducto, (err, result) => {
      if (err) {
        return db.rollback(() => {
          console.error("Error al eliminar el producto: ", err)
          reject(err)
        })
      }
      resolve({
        message: "Producto eliminado correctamente",
        icon: "success",
        title: "Éxito",
        confirmButtonText: "Entendido",
        showCancelButton: false
      })
    })
  })
}

module.exports = eliminarProductoController

/*
const updateIds = `SET @count = 0;
        UPDATE productos SET id = (@count := @count + 1) ORDER BY id;
        ALTER TABLE productos AUTO_INCREMENT = 1;
      `
      db.query(updateIds, (err, result) => {
        if (err) {
          return db.rollback(() => {
            console.error("Error al actualizar los ids: ", err)
            reject(err)
          })
        }

        db.commit(err => {
          if (err) {
            return db.rollback(() => {
              console.error("Error al hacer commit: ", err)
              reject(err)
            })
          }

          resolve({
            message: "Producto eliminado correctamente",
            icon: "success",
            title: "Éxito",
            confirmButtonText: "Entendido",
            showCancelButton: false
          })
        })
      })
 */