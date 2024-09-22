import projectsData from './projects.json';
import './styles.css';

export default function ProjectsComponent() {
    type Project = {
        name: string;
        description: string;
        link: string;
        languages: {
            backend: string[];
            frontend: string[];
            database: string[];
        };
        type: string;
    };

    const projects: Project[] = projectsData.projects;

    return (
        <section id='projects'>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <p><strong>Backend:</strong> {project.languages.backend.join(', ')}</p>
                    {project.languages.frontend.length > 0 && (
                        <p><strong>Frontend:</strong> {project.languages.frontend.join(', ')}</p>
                    )}
                    {project.languages.database.length > 0 && (
                        <p><strong>Database:</strong> {project.languages.database.join(', ')}</p>
                    )}
                    <p><strong>Type:</strong> {project.type}</p>
                    <a target='_blank' rel="noopener noreferrer" href={project.link}>View Project</a>
                </div>
            ))}
        </section>
    );
}
