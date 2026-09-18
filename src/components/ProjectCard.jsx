export default function ProjectCard({ title, description, href, image, imageAlt }) {
  return (
    <div className="row mb-4 project-card g-0" data-reveal>
      <div className="col-md-6 d-flex align-items-center p-3">
        <div className="project-content">
          <h4 className="fw-bold text-light">{title}</h4>
          <p className="text-light">{description}</p>
          {href && (
            <a href={href} target="_blank" rel="noreferrer">
              <button className="btn btn-outline-light btn-sm">View Project</button>
            </a>
          )}
        </div>
      </div>
      <div className="col-md-6 project-image-container p-0">
        <img src={image} className="project-image w-100 h-100" alt={imageAlt || title} />
      </div>
    </div>
  );
}
