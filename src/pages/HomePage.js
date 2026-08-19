import { ProfileCard } from '../components/ProfileCard.js';
import { team } from '../data/team.js';

/** Renderiza el contenido principal de la página de equipo. */
export function HomePage() {
  return team.map(ProfileCard).join('');
}
