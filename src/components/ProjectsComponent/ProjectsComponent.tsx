import projectsData from "./projects.json";
import './ProjectsComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { getIcon } from "./getIcon";
import { ProjectType } from "../../types/ProjectsType";

export default function ProjectsComponent() {
  const projects: ProjectType[] = projectsData.projetos;

  return (
    <section id="projects">
      <h2>Projetos</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.nome}</h3>

          {project.categoria && (
            <>
              <p>
                <strong>{project.categoria}</strong>
              </p>
            </>
          )}

          {project.semestre && (
            <>
              <p>
                <strong>Semestre:</strong> {project.semestre}
              </p>
            </>
          )}

          {project.professor_parceiro && (
            <>
              <p>
                <strong>Professor Parceiro:</strong> {project.professor_parceiro}
              </p>
            </>
          )}

          {project.problema && (
            <>
              <p>
                <strong>Problema:</strong> {project.problema}
              </p>
            </>
          )}

          {project.solucao && (
            <>
              <p>
                <strong>Solução:</strong> {project.solucao}
              </p>
            </>
          )}

          {project.tecnologias &&
            Object.keys(project.tecnologias).length > 0 && (
              <>
                <p>
                  <strong>Tecnologias:</strong>
                </p>
                <p className="techMain">
                  {Object.keys(project.tecnologias).map((tech, i) => (
                    <span key={i} title={tech}>
                      {getIcon(tech)}
                    </span>
                  ))}
                </p>
              </>
            )}

          {project.contribuicoes_pessoais && (
            <>
              <p>
                <strong>Contribuições Pessoais:</strong> {project.contribuicoes_pessoais}
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
                        {project.soft_skills && project.soft_skills[skill]}
                      </span>
                    </>
                  ))}
                </p>
              </>
            )}

          {project.repositorio && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.repositorio}
            >
              Ver Projeto <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
