import './Header.css';
export default function Header() {
  return (
    <header>
        <div className="section">
            <div className="welcome">
                <h1>Bem-vindo ao meu portfólio!</h1>
                <p>Meu nome é João Gabriel, tenho 20 anos e sou estudante de Desenvolvimento de Software na Fatec em São José dos Campos, Brasil. Atualmente, estou no meu 3º semestre.</p>
            </div>
            <div className="img">
            <img src="./static/img/User.png" alt="Foto do usuário" />
            </div>
        </div>
        <nav>
            <a href="/#">Início</a>
            <a href="/#about">Sobre</a>
            <a href="/#contact">Contato</a>
            <a href="/projects">Projetos</a>
            <a href="/studies">Estudos</a>
        </nav>
    </header>
  );
}
