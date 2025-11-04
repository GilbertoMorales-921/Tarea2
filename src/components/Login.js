import { useState } from 'react';

function Login({ onLogin }) {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  const iniciarSesion = () => {
    if (nombre.trim() !== '' && contraseña.trim() !== '') {
      onLogin(nombre);
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div className="login-container">
      <h2>Por favor inicia sesión</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && iniciarSesion()}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && iniciarSesion()}
        />
        <button onClick={iniciarSesion}>Iniciar sesión</button>
      </div>
    </div>
  );
}

export default Login;

