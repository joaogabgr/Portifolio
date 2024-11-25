export type ProjectType = {
    semester?: string;
    name: string;
    partner?: string;
    problem?: string;
    solution?: string;
    repository: string;
    technologies: { [key: string]: string | string[] | undefined };
    personal_contributions?: string;
    hard_skills: { [key: string]: string | string[] | undefined };
    soft_skills: { [key: string]: string | string[] | undefined };
    description?: string;
    category?: string;
  };
  