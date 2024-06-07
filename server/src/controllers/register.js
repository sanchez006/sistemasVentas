//Register.js
const db = require('../config/dbConfig')

function getRegisterUser(user) {
  return new Promise((resolve, reject) => {
    //VERIFICAR CAMPOS VACIOS
    if (!user || !user.nombres || !user.apellidos || !user.direccion || !user.telefono || !user.correo_electronico || !user.contrasenia || !user.confirmar_contrasenia) {
      resolve({
        title: 'Error.',
        message: 'Faltan campos obligatorios.',
        icon: 'error',
        showCancelButton: false,
        confirmButton: 'Ok'
      })
      return;
    }

    //ELIMINAR EL CAMPO DE CONFIRMAR CONTRASEÑA
    delete user.confirmar_contrasenia;
    const { nombres, apellidos, direccion, telefono, correo_electronico, contrasenia,...userData } = user;
    console.log(userData)

    //VERIFICAR QUE EL CORREO NO ESTÉ REGISTRADO
    const checkEmail = 'SELECT * FROM usuarios WHERE correo_electronico = ?';
    db.query(checkEmail, user.correo_electronico, (err, result) => {
      if (err) {
        console.error("Error al consultar en la tabla usuarios: ", err);
        reject({
          title: 'Error.',
          message: 'Error al registrar el usuario.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
      } else if (result.length > 0) {
        console.log("Correo ya registrado.");
        resolve({
          title: 'Error.',
          message: 'El usuario ya existe.',
          icon: 'error',
          showCancelButton: false,
          confirmButton: 'Ok'
        })
      } else {
        //INSERTAR EN LA BASE DE DATOS
        const registerUser = 'INSERT INTO usuarios SET ?';
        db.query(registerUser, user, (err, result) => {
          if (err) {
            console.error("Error al insertar en la tabla usuarios: ", err);
            reject({
              title: 'Error.',
              message: 'Error al registrar el usuario.',
              icon: 'error',
              showCancelButton: false,
              confirmButton: 'Ok'
            })
          } else {
            const usuario_id = result.insertId;
            console.log("Usuario insertado correctamente. ID: " + usuario_id);
            resolve({
              title: 'Registro exitoso.',
              message: 'Usuario registrado correctamente.',
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

module.exports = getRegisterUser;
