# Gestor de Tareas con React

Una aplicación simple y elegante para gestionar tus tareas diarias. Incluye un sistema de login y permite crear, editar, completar y eliminar tareas con un diseño moderno.

## Cómo usar la aplicación

### Requisitos
- Node.js (versión 14 o superior)
- npm

### Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia la aplicación:
```bash
npm start
```

3. La aplicación se abrirá en tu navegador en `http://localhost:3000`

## Estructura del proyecto

```
src/
├── components/
│   ├── Login.js          # Componente de inicio de sesión
│   ├── ListaTareas.js    # Lista de tareas
│   └── Tarea.js          # Componente individual de tarea
├── App.js                # Componente principal
└── index.js              # Punto de entrada
```

## Funcionalidades principales

- **Login seguro**: Inicia sesión con usuario y contraseña para acceder a tus tareas
- **Crear tareas**: Agrega nuevas tareas de forma rápida
- **Editar tareas**: Modifica el texto de cualquier tarea (presiona Enter para guardar)
- **Completar tareas**: Marca las tareas terminadas con un simple clic
- **Eliminar tareas**: Borra las tareas que ya no necesites
- **Cerrar sesión**: Sal de tu cuenta cuando termines

## Tecnologías utilizadas

- React 18.2.0
- JavaScript ES6+
- CSS3 moderno con efectos visuales

## Sobre el proyecto

Este es un proyecto de práctica para aprender los conceptos fundamentales de React, incluyendo componentes, hooks (useState), props, renderizado condicional y manejo de listas.

