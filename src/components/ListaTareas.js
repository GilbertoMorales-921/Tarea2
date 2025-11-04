import { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      const tarea = {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false
      };
      setTareas([...tareas, tarea]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const editarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      agregarTarea();
    }
  };

  return (
    <div className="lista-tareas-container">
      <h2>Lista de Tareas 📝</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      {tareas.length === 0 ? (
        <p className="mensaje-vacio">No hay tareas aún</p>
      ) : (
        <ul className="tareas-lista">
          {tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={() => eliminarTarea(tarea.id)}
              toggleCompletada={() => toggleCompletada(tarea.id)}
              editarTarea={(nuevoTexto) => editarTarea(tarea.id, nuevoTexto)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaTareas;

