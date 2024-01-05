const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: String,
    comentarios: [{ contenido: String }],
});

// Exportar el modelo correctamente
module.exports = mongoose.model('Publicacion', publicacionSchema);
