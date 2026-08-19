# Página del equipo

Página sencilla creada con Bootstrap y JavaScript modular.

## Estructura

```text
.
├── index.html                 # Página principal y carga de Bootstrap
├── assets
│   └── images
│       └── 177950699.jpeg     # Foto de Matheu
├── profiles
│   └── matheu.html            # Perfil profesional de Matheu
└── src                         # Componentes y lógica reutilizable
    ├── app
    │   ├── main.js            # Punto de entrada de la página de inicio
    │   └── matheu.js          # Punto de entrada del perfil de Matheu
    ├── components
    │   ├── ExperienceList.js  # Lista reutilizable de experiencia
    │   ├── ProfileCard.js     # Componente reutilizable de tarjeta
    │   ├── ProjectCard.js     # Tarjeta reutilizable de proyecto
    │   └── SectionTitle.js    # Encabezado reutilizable de sección
    ├── data
    │   ├── matheu.js          # Información del perfil de Matheu
    │   └── team.js            # Datos de los integrantes
    └── pages
        ├── HomePage.js        # Composición de la página principal
        └── MatheuPage.js      # Composición de un perfil
```

Para verla, abre `index.html` usando un servidor local (por ejemplo, Live Server en VS Code).
