import express from 'express';
import {
    obtenerUsuarios,
    crearUsuario,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
    //login
} from '../controllers/usuario.controller.js';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', obtenerUsuarios);

// Ruta para crear un nuevo usuario
router.post('/', crearUsuario);

// Ruta para obtener un usuario por su ID
router.get('/:id', obtenerUsuarioPorId);

// Ruta para actualizar un usuario por su ID
router.put('/:id', actualizarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', eliminarUsuario);

// Ruta para iniciar sesión
//router.post('/login', login);

export default router;
