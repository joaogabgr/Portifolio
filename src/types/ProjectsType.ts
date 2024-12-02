export type ProjectType = {
    semestre?: string;
    nome: string;
    professor_parceiro?: string;
    problema?: string;
    solucao?: string;
    repositorio: string;
    tecnologias: { [key: string]: string | string[] | undefined };
    contribuicoes_pessoais?: string;
    hard_skills: { [key: string]: string | string[] | undefined };
    soft_skills?: { [key: string]: string | string[] | undefined };
    categoria?: string;
  };
  