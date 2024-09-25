import projectsData from './projects.json';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { getIcon } from './getIcon';

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
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <p><strong>Backend:</strong> {project.languages.backend.map((lang, i) => (
                        <span key={i} title={lang}>{getIcon(lang)} </span>
                    ))}</p>

                    {project.languages.frontend.length > 0 && (
                        <p><strong>Frontend:</strong> {project.languages.frontend.map((lang, i) => (
                            <span key={i} title={lang}>{getIcon(lang)} </span>
                        ))}</p>
                    )}

                    {project.languages.database.length > 0 && (
                        <p><strong>Database:</strong> {project.languages.database.map((lang, i) => (
                            <span key={i} title={lang}>{getIcon(lang)} </span>
                        ))}</p>
                    )}

                    <p><strong>Type:</strong> {project.type}</p>
                    <a target='_blank' rel="noopener noreferrer" href={project.link}>
                        View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
            ))}
        </section>
    );
}
