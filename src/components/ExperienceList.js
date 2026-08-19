/** Lista reutilizable de experiencia laboral. */
export function ExperienceList(experience) {
  return experience.map(({ role, company, period, description }) => `
    <article class="mb-4">
      <div class="d-flex flex-column flex-sm-row justify-content-between gap-1">
        <h3 class="h5 mb-0">${role}</h3>
        <span class="text-body-secondary small">${period}</span>
      </div>
      <p class="fw-semibold mb-1">${company}</p>
      <p class="text-body-secondary mb-0">${description}</p>
    </article>
  `).join('');
}
