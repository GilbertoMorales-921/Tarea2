import { useState } from 'react';

function Tarea({ texto, completada, eliminarTarea, toggleCompletada, editarTarea }) {
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(texto);

  const guardarCambios = () => {
    if (textoEditado.trim() !== '') {
      editarTarea(textoEditado);
      setEditando(false);
    } else {
      alert('La tarea no puede estar vacía');
    }
  };

  const cancelarEdicion = () => {
    setTextoEditado(texto);
    setEditando(false);
  };

  return (
    <li className="tarea-item">
      {editando ? (
        <>
          <input
            type="text"
            className="tarea-input-editar"
            value={textoEditado}
            onChange={(e) => setTextoEditado(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') guardarCambios();
              if (e.key === 'Escape') cancelarEdicion();
            }}
            autoFocus
          />
          <button className="btn-circular btn-guardar" onClick={guardarCambios} title="Guardar">
            ✔
          </button>
          <button className="btn-circular btn-cancelar" onClick={cancelarEdicion} title="Cancelar">
            ❌
          </button>
        </>
      ) : (
        <>
          <span className="tarea-texto" style={{ textDecoration: completada ? 'line-through' : 'none' }}>
            {texto}
          </span>
          <div className="tarea-botones">
            <button className="btn-circular btn-editar" onClick={() => setEditando(true)} title="Editar">
              ✏️
            </button>
            <button className="btn-circular btn-completar" onClick={toggleCompletada} title="Completar">
              ✔
            </button>
            <button className="btn-circular btn-eliminar" onClick={eliminarTarea} title="Eliminar">
              ❌
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Tarea;

