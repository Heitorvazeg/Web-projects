import { Link } from "react-router-dom";
import "./footer.css"
import logo from "/logo2.png"

function Footer() {
    return (
        <footer>
            <div className="footerTotal">
                <img src={logo} alt="Logo Renovaz" />
                <nav className="navFooter">
                    <Link to="/">Inicio</Link>
                    <Link to="/Sobre">Sobre</Link>
                    <Link to="/Portfolio">Portfólio</Link>
                </nav>
                <div className="faleConosco">
                    <h1>Fale Conosco</h1>
                    <h1>62 99369-9805</h1>
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
            </div>
            <hr />
            <div className="direitosReservados">
                <h1>&copy; 2025 - Todos os direitos reservados.</h1>
                <a href="https://github.com/Heitorvazeg" target="_blank" className="Heitor">Criado por Heitor Vaz</a>
            </div>
        </footer>
    )
}

export default Footer;