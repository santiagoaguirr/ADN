// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import PostCard from './postcard'; // Agrega esta línea

const Home = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await fetch('http://localhost:3000/publicaciones');
        const data = await response.json();
        setPublicaciones(data);
      } catch (error) {
        console.error('Error al obtener publicaciones', error);
      }
    };

    fetchPublicaciones();
  }, []);

  return (
    <div>
      <h1>Publicaciones</h1>
      {publicaciones.map((publicacion) => (
        <PostCard key={publicacion._id} publicacion={publicacion} />
      ))}
    </div>
  );
};

export default Home;
