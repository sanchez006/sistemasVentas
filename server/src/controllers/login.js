const db = require('../config/dbConfig')

function getLoginUser(user) {
  return new Promise((resolve, reject) => {
    const { correo_electronico, contrasenia } = user;
    //Verificar campos vacíos
    if (!correo_electronico || !contrasenia) {
      return resolve({
        title: "Error",
        message: "¡Debe llenar todos los campos!",
        icon: "error",
        timer: 2000,
        success: false,
      });
    }

    //Verificar si el usuario existe en la base de datos
    const loginUser = 'SELECT id FROM usuarios WHERE correo_electronico = ? AND contrasenia = ?';

    db.query(loginUser, [correo_electronico, contrasenia], (err, result) => {
      if (err) {
        console.error("Error al consultar en la tabla usuarios: ", err);
        return reject("Error al consultar en la tabla usuarios");
      }
      else {
        if (result.length > 0) {
          const usuario_id = result[0].id;

          //REGISTRO DE ACCESO EN LA TABLA 'accesousuarios'
          const acceso = { usuario_id };
          const registrarAcceso = 'INSERT INTO accesousuarios SET ?';
          db.query(registrarAcceso, acceso, (err, result) => {
            if (err) {
              console.error("Error al insertar en la tabla accesousuarios: ", err);
              return reject("Error al insertar en la tabla accesousuarios");
            }
            else {
              console.log("Transacción completada con éxito. ID insertado: " + result.insertId);
              resolve({ message: "Usuario registrado", icon: "success", timer: 2000, success: true });
            }
            console.log("Transacción completada con éxito. Datos obtenidos: " + result);
          })
        } else{
          console.log("No se encontró el usuario en la base de datos");
          resolve({ message: "Usuario no encontrado", icon: "error", timer: 2000, success: false });
        }
      }
      console.log("Transacción completada con éxito. Datos obtenidos: " + result);
    });
  });
}

module.exports = { getLoginUser };