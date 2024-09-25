import "./styles.css";
export default function Header() {
  return (
    <header>
        <div className="section">
            <div className="welcome">
                <h1>Welcome to my portfolio!</h1>
                <p>My name is João Gabriel, I am 20 years old, and I am a Software Development student at Fatec in São José dos Campos, Brazil. I am currently in my 3rd semester.</p>
            </div>
            <div className="img">
            <img src="./static/img/User.png" alt="Foto do usuario" />
            </div>
        </div>
        <nav>
            <a href="/#">Home</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
            <a href="/projects">Projects</a>
        </nav>
    </header>
  );
}
