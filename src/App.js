import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import ListaTareas from './components/ListaTareas';

function App() {
  const [logueado, setLogueado] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');

  const handleLogin = (nombre) => {
    setLogueado(true);
    setNombreUsuario(nombre);
  };

  const handleLogout = () => {
    setLogueado(false);
    setNombreUsuario('');
  };

  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>
      
      {!logueado ? (
        /* Parte 2: Componente de Login */
        <div className="seccion">
          <h3>📱 Iniciar Sesión</h3>
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <>
          {/* Bienvenida y opción de cerrar sesión */}
          <div className="seccion bienvenida-seccion">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>👋 Bienvenido, {nombreUsuario}</h3>
              <button onClick={handleLogout} className="btn-logout">Cerrar sesión</button>
            </div>
          </div>

          {/* Lista de Tareas */}
          <div className="seccion">
            <h3>📋 Lista de Tareas</h3>
            <ListaTareas />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

