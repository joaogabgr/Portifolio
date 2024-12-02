import './StudiesComponent.css';

export default function StudiesComponent() {
    return (
        <section id="Studies">
            <h2>Estudos</h2>

            <div className="content">
                <h3>Desenvolvimento de Software</h3>
                <p>Atualmente, estou cursando Desenvolvimento de Software na Fatec em São José dos Campos, Brasil, e estou no meu terceiro semestre.</p>
            </div>

            <div className="content">
                <h3>Inglês</h3>
                <p>Concluí um curso de inglês na FISK em Caçapava, Brasil, e atualmente estou no nível intermediário.</p>
            </div>

            <div className="content">
                <h3>Alura</h3>
                <p>Concluí diversos cursos na Alura, focando tanto em programação back-end quanto front-end.</p>
            </div>
        </section>
    );
}
