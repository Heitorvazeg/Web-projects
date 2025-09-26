import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    const [estaNoTopo, setEstaNoTopo] = useState(true);

    useEffect(() => {
        const handleRolagem = () => {
            if (window.scroll = 0) {
                setEstaNoTopo(true);

            } else {
                setEstaNoTopo(false);
            }
        }

        window.addEventListener("scroll", handleRolagem);
        handleRolagem();


        return () => window.removeEventListener("scroll", handleRolagem);
    }, [])

    return (
        <header className={estaNoTopo ? "headerNaoEstaNoTopo" : "headerEstaNoTopo"}>
            <img src="" alt="" />
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Portfolio">Portfólio</Link>
            </nav>
            <div className="LinksIconsHeader">
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-solid fa-envelope"></i>
            </div>
        </header>
    )
}

export default Header;