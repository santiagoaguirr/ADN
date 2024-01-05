// components/CreatePost.jsx
import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Aquí deberías realizar una llamada a tu backend para crear un nuevo post con los datos proporcionados.
    // Ejemplo de llamada fetch:
    // fetch('URL_DEL_BACKEND/posts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ title, description }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Nuevo post creado:', data);
    //     // Redirigir a la página principal o a la página del nuevo post.
    //   })
    //   .catch(error => console.error('Error creating post:', error));
    // Por ahora, simplemente mostraremos los datos en la consola.
    console.log('Nuevo post:', { title, description });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
