import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "/logo2.png"

function Header() {
    const [estaNoTopo, setEstaNoTopo] = useState(true);

    useEffect(() => {
        const handleRolagem = () => {
            if (window.scrollY === 0) {
                setEstaNoTopo((prev) => prev = true);

            } else {
                setEstaNoTopo((prev) => prev = false);
            }
        }

        window.addEventListener("scroll", handleRolagem);
        handleRolagem();


        return () => window.removeEventListener("scroll", handleRolagem);
    }, [])

    return (
        <header className={estaNoTopo ? "headerEstaNoTopo" : "headerNaoEstaNoTopo"}>
            <Link to="/"><img src={logo} alt="Logo Renovaz" /></Link>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Portfolio">Portfólio</Link>
            </nav>
            <div className="LinksIconsHeader">
                <button className="buttonH">
                    <a href="https://wa.me/5562993699805" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                </button>
                <button className="buttonH">
                    <a href="https://www.instagram.com/renovazconstrutora/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </button>
                <button className="buttonH">
                    <a href="https://www.tiktok.com/@mestredosprojetos?lang=pt-BR" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                </button>
                <button className="buttonH">
                    <a href="mailto:heitorvazeg@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                </button>
            </div>
        </header>
    )
}

export default Header;