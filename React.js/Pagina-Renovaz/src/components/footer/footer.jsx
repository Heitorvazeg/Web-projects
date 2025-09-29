import { Link } from "react-router-dom";
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div className="footerTotal">
                <img src="" alt="" />
                <nav className="navFooter">
                    <Link to="/">Inicio</Link>
                    <Link to="/Sobre">Sobre</Link>
                    <Link to="/Portfolio">Portfólio</Link>
                </nav>
                <div className="faleConosco">
                    <h1>Fale Conosco</h1>
                    <h1>62 99563-5794</h1>
                    <button className="buttonH">
                        <a href="" target="_blank f"><i className="fa-brands fa-whatsapp f"></i></a>
                    </button>
                    <button className="buttonH">
                        <a href="" target="_blank"><i className="fa-brands fa-instagram f"></i></a>
                    </button>
                    <button className="buttonH">
                        <a href="" target="_blank"><i className="fa-brands fa-tiktok f"></i></a>
                    </button>
                    <button className="buttonH">
                        <a href="" target="_blank"><i className="fa-solid fa-envelope f"></i></a>
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