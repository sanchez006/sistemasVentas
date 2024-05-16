const db = require('../config/dbConfig');

function getRegisterUser(user) {
  return new Promise((resolve, reject) => {

    //VERIFICAR CAMPOS VACIOS
    if (!user || Object.values(user).some(value => !value)){
      reject({message: 'Uno o varios campos vacíos'});
      return;
    }

    //ELIMINAR EL CAMPO confirmar_contrasenia ANTES DE LA INSERCIÓN
    const { confirmar_contrasenia, ...userData } = user;

    //VERIFICAR SI EL USUARIO SE ENCUENTRA REGISTRADO
    const checkEmail = 'SELECT COUNT(*) AS count FROM usuarios WHERE correo_electronico = ?';

    db.query(checkEmail, user.correo_electronico, (err, result) => {
      if (err) {
        console.error("Error al verificar el registro del usuario: ", err);
        reject("Error al consultar en la tabla usuarios");
      } else{
        const emailCount = result[0].count;
        if (emailCount > 0) {
          reject({message: 'El correo electrónico ya se encuentra registrado'});
        } else{
          //INSERTAR EN LA BASE DE DATOS
          const registerUser = 'INSERT INTO usuarios SET ?';

          db.query(registerUser, userData, (err, result) => {
            if (err) {
              console.error("Error al insertar en la tabla usuarios: ", err);
              reject(err);
            }
            else {
              const usuario_id = result.insertId;
              console.log("Usuario insertado correctamente. ID: " + usuario_id);
              resolve({
                title: 'Éxito.',
                message: 'El registro se realizó correctamente.',
                icon: 'success',
                showCancelButton: false,
                confirmButton: 'Ok',
                user: usuario_id});
            }
          })
        }
      }
    })
  })
}

module.exports = { getRegisterUser };