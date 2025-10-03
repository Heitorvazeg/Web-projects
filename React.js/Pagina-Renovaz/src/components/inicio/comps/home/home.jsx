import "./home.css";
import videoSrc from "/video.mp4";
import logo from "/logo3.jpg";

function Home() {
    return (
        <section className="homeContainer">
            <video autoPlay muted loop className="bg-video">
                <source src={videoSrc} type="video/mp4"/>
            </video>
            <div className="overlay"></div>
            <div className="conteudo">
                <img src={logo} alt="Logo Renovaz Construtora" className="logo fade-in-section"/>
                <h1 className="fade-in-section">"Transformando ideias em obras de excelência"</h1>
            </div>
        </section>
    )
}

export default Home;