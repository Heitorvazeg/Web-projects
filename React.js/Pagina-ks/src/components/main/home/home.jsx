import Texting from "../texting";
import "./home.css";

function Home() {
    return (
        <section className="home" id="home">
            <div className="tituloLogo">
                <img src="" alt="Logo KS Soluções" />
                <h1 className="titulo">KS</h1>
                <Texting text={"SSoluções em Tecnologia"}></Texting>
            </div>
            <div className="descricaoHome">
            </div>
        </section>
    )
}

export default Home;