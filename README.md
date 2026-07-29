# Portafolio Profesional - Kimberly Chiza

Portafolio virtual profesional para economista, desarrollado con React, TypeScript y Vite.

## Características

- **Diseño Moderno**: Interfaz profesional con gradientes y animaciones suaves
- **Responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- **Secciones Completas**:
  - Hero con presentación personal
  - Sobre mí con habilidades destacadas
  - Servicios profesionales (6 servicios principales)
  - Experiencia laboral con timeline interactivo
  - Educación y certificaciones
  - Formulario de contacto funcional
- **Navegación Sticky**: Barra de navegación fija con scroll suave
- **Estilos Profesionales**: Paleta de colores corporativa (azul profundo con acentos dorados/naranjas)

## Tecnologías

- **React 19.2.7** - Biblioteca UI
- **TypeScript 6.0.2** - Tipado estático
- **Vite 8.1.1** - Build tool y servidor de desarrollo
- **CSS Moderno** - Con gradientes, grid, flexbox y media queries

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── App.tsx          # Componente principal con todas las secciones
├── App.css          # Estilos específicos del portafolio
├── index.css        # Estilos base y reset
├── main.tsx         # Punto de entrada
└── assets/          # Imágenes y recursos estáticos
```

## Personalización

El portafolio está diseñado para ser fácilmente personalizable:

- **Información Personal**: Modificar datos en `App.tsx` (nombre, contacto, experiencia, educación)
- **Colores**: Ajustar variables CSS en `App.css` para cambiar la paleta de colores
- **Servicios**: Agregar o modificar servicios en la sección correspondiente
- **Experiencia**: Actualizar el timeline con experiencia real

## Despliegue

El proyecto puede ser desplegado en cualquier plataforma de hosting estático:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Licencia

Este proyecto es de uso personal para Kimberly Chiza - Economista Profesional.
