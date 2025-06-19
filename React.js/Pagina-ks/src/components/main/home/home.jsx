import Texting from "../texting";
import "./home.css";

function Home() {
    return (
        <section className="home" id="home">
            <div className="tituloLogo">
                <img src="" alt="Logo KS Soluções" className="imageLogo"/>
                <Texting text={"SSoluções em Tecnologia"}></Texting>
            </div>
            <div className="descricaoHome">
            </div>
        </section>
    )
}

export default Home;