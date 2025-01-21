# Proyecto con Bootstrap, JSON Server y Vite

## Descripción
Este proyecto es una aplicación web construida con **Vite** como entorno de desarrollo rápido, **Bootstrap** para el diseño y estilos, y **JSON Server** como un servidor API REST simulado para manejar datos de manera sencilla.

## Requisitos
Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 14 o superior)
- **npm** (generalmente incluido con Node.js)

## Instalación

1. **Clonar el repositorio**

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

2. **Instalar las dependencias**

```bash
npm install
```

3. **Instalar JSON Server** (si no está instalado globalmente)

```bash
npm install -g json-server
```

## Estructura del proyecto

```
.
├── public          # Archivos estáticos
├── src             # Código fuente principal
│   ├── assets      # Recursos como imágenes o íconos
│   ├── components  # Componentes reutilizables
│   ├── styles      # Estilos personalizados
│   └── main.js     # Punto de entrada principal
├── db.json         # Archivo de datos para JSON Server
├── package.json    # Información del proyecto y dependencias
├── vite.config.js  # Configuración de Vite
└── README.md       # Documentación del proyecto
```

## Uso

### 1. Iniciar JSON Server
JSON Server simulará una API REST utilizando el archivo `db.json` en el directorio raíz.

```bash
json-server --watch db.json --port 3000
```

El servidor estará disponible en: [http://localhost:3000](http://localhost:3000)

### 2. Iniciar el servidor de desarrollo
Ejecuta el servidor de desarrollo de Vite para la aplicación web.

```bash
npm run dev
```

La aplicación estará disponible en: [http://localhost:5173](http://localhost:5173)

### 3. Personalización con Bootstrap
Puedes modificar y agregar estilos personalizados en los archivos dentro de `src/styles` y extender las clases de Bootstrap según sea necesario.

## Scripts disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Genera una versión optimizada para producción.
- **`npm run preview`**: Previsualiza la versión optimizada.

## Personalización

1. **Editar datos en JSON Server**: Modifica el archivo `db.json` para agregar o cambiar los datos.
2. **Configurar rutas de la API**: Asegúrate de que las rutas en el código coincidan con las rutas definidas en `db.json`.
3. **Agregar estilos personalizados**: Edita los archivos en `src/styles` para sobrescribir o extender los estilos de Bootstrap.

## Tecnologías utilizadas

- **Vite**: Herramienta de desarrollo rápida y ligera.
- **Bootstrap**: Framework CSS para diseño responsivo.
- **JSON Server**: Simulador de API REST para desarrollo y pruebas.

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección.
3. Haz commit de tus cambios.
4. Envía un pull request.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por usar este proyecto! Si tienes preguntas o sugerencias, no dudes en abrir un issue.
