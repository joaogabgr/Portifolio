import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";

export default function Index() {
    return (
        <>
            <Header />
            <main>
                <About />
                <Contact />
            </main>
        </>
    )
}