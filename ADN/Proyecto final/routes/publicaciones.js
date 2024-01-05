const express = require('express');
const router = express.Router();
// Corrige la importación del modelo
const Publicacion = require('../models/publicacion');  // Cambiado de 'publicaciones' a 'publicacion'

// Resto del código...



// Obtener todas las publicaciones
router.get('/', async (req, res) => {
    try {
        const publicaciones = await Publicacion.find();
        res.json(publicaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener publicaciones' });
    }
});

// Crear una nueva publicación
router.post('/', async (req, res) => {
    const { titulo, descripcion, imagen, comentarios } = req.body;

    try {
        const nuevaPublicacion = new Publicacion({ titulo, descripcion, imagen, comentarios });
        await nuevaPublicacion.save();
        res.json({ mensaje: 'Publicación creada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear la publicación' });
    }
});

// Obtener una publicación por su ID
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const publicacion = await Publicacion.findById(id);
        res.json(publicacion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener la publicación' });
    }
});

// Actualizar una publicación por su ID
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { titulo, descripcion, imagen, comentarios } = req.body;

    try {
        await Publicacion.findByIdAndUpdate(id, { titulo, descripcion, imagen, comentarios });
        res.json({ mensaje: 'Publicación actualizada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar la publicación' });
    }
});

// Eliminar una publicación por su ID
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await Publicacion.findByIdAndDelete(id);
        res.json({ mensaje: 'Publicación eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al eliminar la publicación' });
    }
});

module.exports = router;
