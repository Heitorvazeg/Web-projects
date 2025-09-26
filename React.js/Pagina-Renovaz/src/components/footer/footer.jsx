import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <img src="" alt="" />
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Portfolio">Portfólio</Link>
            </nav>
            <div>
                <h1>Fale Conosco</h1>
                <h1>62 99563-5794</h1>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-solid fa-envelope"></i>
            </div>
        </footer>
    )
}

export default Footer;