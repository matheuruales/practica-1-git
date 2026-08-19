/** Crea una tarjeta de perfil reutilizable usando las clases de Bootstrap. */
export function ProfileCard({ name, description, image, href }) {
  const profileLink = href
    ? `<a class="stretched-link" href="${href}" aria-label="Ver perfil de ${name}"></a>`
    : '';

  return `
    <article class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <img src="${image}" class="card-img-top object-fit-cover" alt="Foto de ${name}" height="240">
        <div class="card-body text-center">
          <h2 class="h4 card-title mb-2">${name}</h2>
          <p class="card-text text-body-secondary mb-0">${description}</p>
          ${profileLink}
        </div>
      </div>
    </article>
  `;
}
