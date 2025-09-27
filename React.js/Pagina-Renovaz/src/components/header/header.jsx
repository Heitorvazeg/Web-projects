import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

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
            <img src="" alt="" />
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Portfolio">Portfólio</Link>
            </nav>
            <div className="LinksIconsHeader">
                <button className="buttonH">
                    <a href="" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                </button>
                <button className="buttonH">
                    <a href="" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </button>
                <button className="buttonH">
                    <a href="" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                </button>
                <button className="buttonH">
                    <a href="" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                </button>
            </div>
        </header>
    )
}

export default Header;