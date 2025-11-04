# 🎯 Gestor de Tareas - React 💜

Aplicación completa de gestión de tareas desarrollada con React que implementa conceptos fundamentales de la librería, con un **diseño moderno de card semi-transparente** con gradiente púrpura-azul, glassmorphism y animaciones elegantes.

## 📚 Conceptos Implementados

### Parte 2: Renderizado Condicional ✅
- **Componente:** `Login.js`
- **Funcionalidad:**
  - Renderizado condicional según estado de autenticación
  - Input para nombre de usuario
  - Cambio dinámico entre estados de sesión iniciada/cerrada
  - Uso del operador ternario para renderizado condicional

### Parte 3: Listas y Renderizado Dinámico ✅
- **Componente:** `ListaTareas.js`
- **Funcionalidad:**
  - ✅ Lista dinámica de tareas
  - ✅ Agregar tareas desde un input
  - ✅ **Editar tareas con botones circulares** (ACTUALIZADO 🆕)
  - ✅ **Eliminar tareas individualmente** (ACTUALIZADO 🆕)
  - ✅ **Marcar como completadas** (ACTUALIZADO 🆕)
  - ✅ Uso correcto de `map()` para renderizar listas
  - ✅ Keys únicas para cada elemento (usando IDs)
  - ✅ Uso del componente Tarea reutilizable

**💬 Reflexión sobre Keys:**
Las keys son importantes en React porque:
- Ayudan a React a identificar qué elementos han cambiado, agregado o eliminado
- Mejoran el rendimiento al optimizar el proceso de reconciliación
- Deben ser únicas entre elementos hermanos
- Preferiblemente deben ser IDs estables (no usar índices para listas que cambian)

### Sistema de Login Integrado ✅
- **Componentes:** `App.js`, `Login.js`
- **Funcionalidades:**
  - ✅ Login obligatorio con usuario y contraseña
  - ✅ Las listas de tareas solo se muestran después de login
  - ✅ Mensaje de bienvenida personalizado
  - ✅ Botón de cerrar sesión
  - ✅ Renderizado condicional completo

## 🚀 Instalación y Ejecución

### Requisitos previos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar la aplicación:**
```bash
npm start
```

3. La aplicación se abrirá automáticamente en `http://localhost:3000`

## 📂 Estructura del Proyecto

```
Tarea2/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js          # Parte 2: Renderizado condicional
│   │   ├── ListaTareas.js    # Parte 3: Listas dinámicas
│   │   └── Tarea.js          # Parte 4: Componente individual
│   ├── App.js                # Componente principal
│   ├── App.css               # Estilos
│   ├── index.js              # Punto de entrada
│   └── index.css             # Estilos globales
├── package.json
└── README.md
```

## 🎨 Características

### 🏔️ Diseño Paisaje Natural con Card Semi-Transparente
- 🌄 **Fondo de paisaje natural** con montañas nevadas, lago y cielo azul
- 🛣️ **Carretera con líneas amarillas** en primer plano
- 🏔️ **Montañas nevadas** en el horizonte
- 💧 **Lago azul** en medio plano
- 🌾 **Colinas doradas** (pasto seco)
- ☁️ **Cielo azul claro** con gradiente natural
- 💜 **Card semi-transparente** púrpura compacto
- 💎 **Glassmorphism** con blur moderado
- 🔐 **Login obligatorio** con usuario y contraseña
- 📋 **Lista de tareas** funcional con editar/borrar

### ⚡ Funcionalidades
- 🔐 **Login con usuario y contraseña** obligatorio
- 🔘 **Botones circulares** con efectos de onda (naranja, cyan, magenta)
- ✏️ **Editar tareas** con modo de edición inline
- ❌ **Eliminar tareas** con botón circular
- ✔️ **Marcar como completadas** con estilo tachado
- 👋 **Bienvenida personalizada** después del login
- 🚪 **Cerrar sesión** para volver al login
- 📱 **Responsive design** para móviles
- ⌨️ **Atajos de teclado** (Enter para agregar/guardar)
- 🎯 **Feedback visual inmediato** en todas las interacciones

### 🎨 Paleta de Colores Púrpura/Azul
- 💜 **Púrpura Claro** (`rgba(80, 70, 150, 0.4)`) - Parte superior del contenedor
- 💜 **Púrpura Medio** (`rgba(60, 50, 120, 0.5)`) - Secciones y cards
- 💜 **Púrpura Oscuro** (`rgba(40, 30, 90, 0.6)`) - Profundidad y base
- 🔮 **Violeta Brillante** (`rgba(150, 120, 255, 0.X)`) - Bordes, acentos, glow
- 🔵 **Azul Púrpura** (`rgba(100, 80, 200, 0.X)`) - Sombras y efectos
- ⚪ **Blanco Puro** (`#ffffff`) - Texto principal con sombras púrpura

### 🌌 Fondo Estilo Tech con Luces Púrpura/Azul

El fondo simula un **ambiente tech oscuro con iluminación púrpura/violeta**:

#### Elementos del Fondo:
1. **Base Negra** - Fondo oscuro profundo (`#000000`)
2. **Cuadrícula Tech** - Patrón de líneas en violeta simulando teclas (40×40px)
3. **5 Luces Grandes Flotantes** - Iluminación ambiental púrpura/azul animada:
   - Cyan/Azul en superior izquierda 🔵
   - Rosa/Magenta en inferior derecha (tonos púrpura) 💜
   - Púrpura en el centro 🟣
   - Naranja/Púrpura en inferior izquierda 🟠
   - Azul púrpura en superior derecha 💙
4. **12 Puntos de Luz Pulsantes** - En tonos violeta y púrpura ✨
5. **Blur de 40px** - En luces grandes para profundidad difusa
6. **Animaciones:**
   - `lightFloat` (15s) - Movimiento suave de luces grandes
   - `keyGlow` (4s) - Pulsación breathing de puntos de luz

## 🆕 Funcionalidad de Edición de Tareas

### ¿Cómo editar una tarea?

1. **Haz clic en el botón "✏️ Editar"** en cualquier tarea
2. La tarea se convierte en un campo de texto editable
3. Modifica el texto según necesites
4. **Presiona "💾 Guardar"** o **Enter** para confirmar
5. O presiona **"❌ Cancelar"** para descartar los cambios

### Botones disponibles por tarea:

#### Modo Normal (Botones Circulares):
- **✏️** - Editar tarea (naranja/amarillo) 🟠
- **✔** - Marcar como completada (verde azulado) 🟦
- **❌** - Eliminar tarea (rosa) 🟥

#### Modo Edición (Botones Circulares):
- **✔** - Guardar cambios (verde azulado) 🟦
- **❌** - Cancelar edición (rosa) 🟥

### Características de la edición:
- ✅ Validación: no permite guardar tareas vacías
- ✅ Atajo de teclado: presiona **Enter** para guardar
- ✅ Focus automático en el campo de edición
- ✅ Restaura el texto original si cancelas
- ✅ Feedback visual con colores distintivos

## 🔘 Diseño Futurista de Botones

Los botones tienen un diseño circular con **efectos neón cyberpunk**:

### 🎯 Características Visuales:
- **Forma:** Círculos perfectos de 40x40 píxeles
- **Gradientes:** Neón con múltiples colores
- **Glow Effect:** Doble box-shadow (exterior + interior)
- **Hover:** Escala 1.15x + rotación 10°
- **Efecto de Onda:** Pseudo-elemento expansivo en hover
- **Transiciones:** Animaciones suaves de 0.3 segundos

### 🌈 Paleta de Colores Neón:
- 🟠 **Naranja Neón** (`#ffaa00` → `#ff6b00`): Botón Editar
- 🔵 **Cyan Neón** (`#00f3ff` → `#0099ff`): Botón Completar
- 🔴 **Magenta Neón** (`#ff006e` → `#ff00ff`): Botón Eliminar
- 🟢 **Verde/Cyan** (`#00ff88` → `#00f3ff`): Botón Guardar
- 🟣 **Púrpura Neón** (`#b829ff` → `#ff00ff`): Botón Cancelar

### ✨ Inputs Futuristas:
- **Fondo:** Oscuro semi-transparente (`rgba(21, 25, 50, 0.8)`)
- **Borde:** Cyan neón (`#00f3ff`) con glow
- **Focus:** Cambio a magenta neón con glow intenso
- **Sombra:** Efecto neón interior y exterior
- **Border radius:** 12px con efecto cristal

## 🧠 Conceptos de React Utilizados

1. **Hooks:**
   - `useState` para manejo de estado
   
2. **Props:**
   - Paso de datos de padre a hijo
   - Paso de funciones como callbacks

3. **Eventos:**
   - `onClick` para botones
   - `onChange` para inputs
   - `onKeyPress` para detectar Enter

4. **Renderizado Condicional:**
   - Operador ternario (`? :`)
   - Operador AND (`&&`)

5. **Listas:**
   - Método `map()` para renderizar arrays
   - Keys únicas con IDs

6. **Estilos:**
   - CSS modules
   - Estilos inline condicionales

## 📝 Notas de Aprendizaje

### ¿Por qué usar IDs en lugar de índices para keys?
En el gestor completo (Parte 4), usamos `Date.now()` como ID único en lugar del índice del array porque:
- Los índices pueden cambiar cuando se eliminan elementos
- Esto puede causar que React re-renderice componentes incorrectamente
- Los IDs estables mejoran el rendimiento y evitan bugs

### Estado inmutable
Siempre creamos nuevos arrays en lugar de mutar los existentes:
```javascript
setTareas([...tareas, nuevaTarea]); // ✅ Correcto
setTareas(tareas.push(nuevaTarea)); // ❌ Incorrecto
```

## 🎓 Ejercicios Completados

- ✅ Login con renderizado condicional
- ✅ Campo de texto para nombre de usuario
- ✅ Lista dinámica de tareas
- ✅ Gestor completo con agregar, completar y eliminar
- ✅ **Editar y guardar cambios en tareas** (NUEVO)
- ✅ Mensaje cuando no hay tareas
- ✅ Componente Tarea reutilizable
- ✅ Estilos modernos y responsivos
- ✅ Validación de entrada de usuario
- ✅ Múltiples estados en componentes

## 🛠️ Tecnologías Utilizadas

- React 18.2.0
- React Scripts 5.0.1
- CSS3 (con propiedades avanzadas)
- JavaScript ES6+

### 🎨 Tecnologías CSS Modernas:
- `backdrop-filter: blur()` - Efecto glassmorphism
- `background-clip: text` - Gradientes en texto
- `linear-gradient()` - Gradientes neón
- `radial-gradient()` - Efectos de partículas
- `box-shadow múltiple` - Efectos glow neón
- `text-shadow` - Brillo en texto
- `filter: drop-shadow()` - Sombras filtradas
- `transform` - Escalas y rotaciones
- `@keyframes` - Animaciones complejas
- `::before, ::after` - Efectos decorativos

## 🌟 Efectos Visuales Especiales

### 🎭 Animaciones Implementadas:
1. **Luces Flotantes (lightFloat)** - 5 luces ambientales que se mueven por el fondo (15s)
2. **Puntos Pulsantes (keyGlow)** - 12 puntos de luz simulando teclas RGB (4s)
3. **Título Pulsante** - Efecto de brillo que cambia de cyan a magenta (3s)
4. **Barrido de Luz** - Efecto de energía que cruza las secciones (0.7s)
5. **Entrada de Tareas** - Animación slideIn al agregar tareas (0.3s)
6. **Onda en Botones** - Efecto expansivo en hover (0.3s)
7. **Scrollbar Neón** - Barra de desplazamiento con gradiente animado

### 💎 Glassmorphism:
- Fondos semi-transparentes
- Desenfoque de fondo (backdrop-filter)
- Bordes luminosos
- Múltiples capas de transparencia
- Sombras internas y externas

### 🌈 Sistema de Glow:
Cada elemento tiene efectos de brillo personalizados:
- **Botones:** Doble sombra (exterior + interior)
- **Inputs:** Glow que cambia de cyan a magenta en focus
- **Texto:** Text-shadow con colores neón
- **Bordes:** Border con alpha + box-shadow para brillo

## 👨‍💻 Autor

Proyecto desarrollado como práctica de React - Conceptos fundamentales

---

¡Disfruta aprendiendo React! 🚀

