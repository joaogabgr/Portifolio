import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";

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