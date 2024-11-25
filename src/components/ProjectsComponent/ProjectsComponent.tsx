import projectsData from "./projects.json";
import './ProjectsComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { getIcon } from "./getIcon";
import { ProjectType } from "../../types/ProjectsType";

export default function ProjectsComponent() {
  const projects: ProjectType[] = projectsData.projects;

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>

          {project.semester && (
            <>
              <p>
                <strong>Semester:</strong> {project.semester}
              </p>
            </>
          )}

          {project.partner && (
            <>
              <p>
                <strong>Partner:</strong> {project.partner}
              </p>
            </>
          )}

          {project.problem && (
            <>
              <p>
                <strong>Problem:</strong> {project.problem}
              </p>
            </>
          )}

          {project.solution && (
            <>
              <p>
                <strong>Solution:</strong> {project.solution}
              </p>
            </>
          )}

          {project.technologies &&
            Object.keys(project.technologies).length > 0 && (
              <>
                <p>
                  <strong>Technologies:</strong>
                </p>
                <p>
                  {Object.keys(project.technologies).map((tech, i) => (
                    <span key={i} title={tech}>
                      {getIcon(tech)} {project.technologies[tech]}
                    </span>
                  ))}
                </p>
              </>
            )}

          {project.personal_contributions && (
            <>
              <p>
                <strong>Personal Contributions:</strong>{" "}
                {project.personal_contributions}
              </p>
            </>
          )}

          {project.hard_skills &&
            Object.keys(project.hard_skills).length > 0 && (
              <>
                <p>
                  <strong>Hard Skills:</strong>
                </p>
                <p>
                  {Object.keys(project.hard_skills).map((skill, i) => (
                    <>
                    <span className="subTitle">{skill}</span>
                    <span key={i} title={skill}>
                      {project.hard_skills[skill]}
                    </span>
                    </>
                  ))}
                </p>
              </>
            )}

          {project.soft_skills &&
            Object.keys(project.soft_skills).length > 0 && (
              <>
                <p>
                  <strong>Soft Skills:</strong>
                </p>
                <p>
                  {Object.keys(project.soft_skills).map((skill, i) => (
                    <>
                    <span className="subTitle">{skill}</span>
                    <span key={i}>
                      {project.soft_skills[skill]}
                    </span>
                    </>
                  ))}
                </p>
              </>
            )}

          {project.category && (
            <>
              <p>
                <strong>Category:</strong> {project.category}
              </p>
            </>
          )}

          {project.repository && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.repository}
            >
              View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
