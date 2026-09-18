import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div className="main">
      <section id="projects" className="container py-4">
        <h2 className="text-center fw-bold mb-4" style={{ color: 'aliceblue' }}>
          Projects
        </h2>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </div>
  );
}
