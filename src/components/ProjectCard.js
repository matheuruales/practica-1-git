/** Tarjeta reutilizable para mostrar un proyecto. */
export function ProjectCard({ name, description, url }) {
  return `
    <article class="col-md-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h3 class="h5 card-title">${name}</h3>
          <p class="card-text text-body-secondary">${description}</p>
          <a class="btn btn-outline-primary btn-sm" href="${url}" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
        </div>
      </div>
    </article>
  `;
}
