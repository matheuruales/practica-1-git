# Presentación del equipo

Sitio web desarrollado en equipo para presentar a sus integrantes, intereses, habilidades y proyectos. La aplicación utiliza Bootstrap y JavaScript modular, sin necesidad de un proceso de compilación.

## Integrantes

| Integrante | Perfil | Enfoque |
| --- | --- | --- |
| Johnatan Matheu Ruales Galvis | [Matheu](./profiles/matheu.html) | Inteligencia artificial, desarrollo Full Stack y automatización |
| Luciana Cuenca Gomez | [Luciana](./profiles/Luciana.html) | Unity, desarrollo Full Stack, experiencias inmersivas y diseño gráfico |
| Alejandro España Meza | [Alejandro España](./profiles/España.html) | Unity, desarrollo Full Stack, realidad virtual e inteligencia artificial |

## Funcionalidades

- Página principal con presentación del equipo.
- Navbar con acceso directo al perfil de cada integrante.
- Tarjetas con fotografía, descripción y botón para ver el perfil.
- Página individual para cada integrante.
- Información profesional, experiencia, habilidades y proyectos.
- Enlaces de contacto, LinkedIn y GitHub.
- Botón para regresar desde cada perfil a la página principal.
- Diseño adaptable construido con componentes y utilidades de Bootstrap.

## Tecnologías

- HTML5.
- Bootstrap 5.3.8 mediante CDN.
- JavaScript con módulos ES.
- Git y GitHub para control de versiones y colaboración.

## Estructura del proyecto

```text
.
├── index.html                      # Página principal del equipo
├── assets
│   └── images                      # Imágenes de los integrantes
│       ├── 177950699.jpeg
│       ├── España.png
│       └── sonic.jpg
├── profiles                        # Documentos HTML de los perfiles
│   ├── España.html
│   ├── Luciana.html
│   └── matheu.html
└── src
    ├── app                          # Puntos de entrada de la aplicación
    │   ├── España.js
    │   ├── Luciana.js
    │   ├── main.js
    │   └── matheu.js
    ├── components                   # Componentes reutilizables
    │   ├── ExperienceList.js
    │   ├── ProfileCard.js
    │   ├── ProjectCard.js
    │   └── SectionTitle.js
    ├── data                         # Información del equipo y perfiles
    │   ├── España.js
    │   ├── Luciana.js
    │   ├── matheu.js
    │   └── team.js
    └── pages                        # Composición de las páginas
        ├── EspañaPage.js
        ├── HomePage.js
        ├── LucianaPage.js
        └── MatheuPage.js
```

## Ejecución local

El proyecto usa módulos de JavaScript, por lo que debe abrirse mediante un servidor local.

### Opción 1: Visual Studio Code

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server**, si aún no está disponible.
3. Haz clic derecho sobre `index.html`.
4. Selecciona **Open with Live Server**.

### Opción 2: Python

Desde la raíz del proyecto, ejecuta:

```bash
python3 -m http.server 8000
```

Después visita [http://localhost:8000](http://localhost:8000) en el navegador.

## Flujo de trabajo con Git

- `main`: versión estable del proyecto.
- `dev`: rama de integración del equipo.
- `feature/*`: nuevas funcionalidades.
- `fix/*`: correcciones.

Los cambios se desarrollan en una rama de trabajo, se documentan mediante commits descriptivos y se integran a `dev` mediante un Pull Request con revisión de otro integrante. Cuando la versión está aprobada, `dev` se integra en `main`.

## Convención de commits

```text
feat: descripción de una funcionalidad
fix: descripción de una corrección
style: descripción de un cambio visual
refactor: descripción de una reorganización
docs: descripción de un cambio en documentación
```
