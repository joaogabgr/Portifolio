import { FaJava, FaPython, FaNode, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiSpring, SiTypescript, SiMongodb, SiFlask, SiJavascript, SiPowershell, SiNeo4J, SiRedis, SiApachecassandra } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

// Função para mapear a linguagem para o ícone correspondente
export const getIcon = (language: string) => {
    switch (language) {
        case 'Java':
            return <FaJava />;
        case 'Python':
            return <FaPython />;
        case 'Spring Boot':
            return <SiSpring />;
        case 'TypeScript':
            return <SiTypescript />;
        case 'Node.js':
            return <FaNode />;
        case 'React':
            return <FaReact />;
        case 'HTML':
            return <FaHtml5 />;
        case 'CSS':
            return <FaCss3Alt />;
        case 'MongoDB':
            return <SiMongodb />;
        case 'MySQL':
            return <GrMysql />;
        case 'Flask':
            return <SiFlask />;
        case 'JavaScript':
            return <SiJavascript />;
        case 'PowerShell':
            return <SiPowershell />;
        case 'Neo4j':
            return <SiNeo4J />;
        case 'Redis':
            return <SiRedis />;
        case 'Cassandra':
            return <SiApachecassandra />;
        default:
            return null;
    }
};
