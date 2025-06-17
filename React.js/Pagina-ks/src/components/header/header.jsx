import { useState, useEffect, useContext } from "react";
import { VisibilityContext } from "../context/context";
import { AppContext } from "../context/context";
import "./header.css";

function Header() {
    const [estaNoTopo, setEstaNoTopo] = useState(true);

    useEffect(() => {
        const handleRolagem = () => {
            if (window.scrollY == 0) {
                setEstaNoTopo(true);
            }
            else {
                setEstaNoTopo(false);
            }
        }

        window.addEventListener('scroll', handleRolagem);
        handleRolagem();

        return () => {
            window.removeEventListener('scroll', handleRolagem);
        }
    }, []);

    const { isVisible, setIsVisible } = useContext(VisibilityContext);
    const { app, setApp } = useContext(AppContext);

    return (
        <header className= {estaNoTopo ? "headerTopo" : "headerScroll"}>
            <div className="logoHeader">
            </div>
            <nav className="navHeader">
                <div className="navItensHeader">
                    <a href="#home">Home</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#servicos">Serviços</a> 
                    <a href="#contato">Contato</a>
                </div>
            </nav>
            <div className="contatosHeader">
                <button className="whatsHeader" onClick={
                    () => {
                        setIsVisible(true);
                        setApp("W");
                    }
                }><i class="fa-brands fa-whatsapp"></i></button>
                <button className="emailHeader" onClick={
                    () => {
                        setIsVisible(true);
                        setApp("E");
                    }
                }><i class="fa-solid fa-envelope"></i></button>
            </div>
        </header>
    )
}

export default Header;