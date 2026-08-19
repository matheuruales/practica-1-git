import { ExperienceList } from '../components/ExperienceList.js';
import { ProjectCard } from '../components/ProjectCard.js';
import { SectionTitle } from '../components/SectionTitle.js';

export function LucianaPage(profile) {
  const skills = profile.skills.map((skill) => `<span class="badge text-bg-primary fw-normal">${skill}</span>`).join('');
  const projects = profile.projects.map(ProjectCard).join('');

  return `
    <section class="row align-items-center g-4 py-4 py-md-5">
      <div class="col-md-auto text-center">
        <img src="${profile.image}" class="rounded-circle border shadow-sm" width="160" height="160" alt="Foto de ${profile.name}">
      </div>
      <div class="col-md">
        <p class="text-primary fw-semibold text-uppercase mb-2">Perfil profesional</p>
        <h1 class="display-6 fw-bold">${profile.name}</h1>
        <p class="lead mb-3">${profile.role}</p>
        <a class="btn btn-primary me-2" href="mailto:${profile.email}">Contactar</a>
        <a class="btn btn-outline-secondary" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>

    <section id="acerca" class="mb-5">
      ${SectionTitle('Acerca de mí')}
      <p class="text-body-secondary mb-0">${profile.summary}</p>
    </section>

    <section id="experiencia" class="mb-5">
      ${SectionTitle('Experiencia')}
      ${ExperienceList(profile.experience)}
    </section>

    <section id="habilidades" class="mb-5">
      ${SectionTitle('Habilidades')}
      <div class="d-flex flex-wrap gap-2">${skills}</div>
    </section>

    <section id="proyectos" class="mb-4">
      ${SectionTitle('Proyectos')}
      <div class="row g-3">${projects}</div>
    </section>
  `;
}
