import "./home.css";
import videoSrc from "./video.mp4";

function Home() {
    return (
        <section className="homeContainer">
            <video autoPlay muted loop className="bg-video">
                <source src={videoSrc} type="video/mp4"/>
            </video>
            <div className="overlay"></div>
            <div className="conteudo">
                <img src="" alt="" />
                <h1 className="fade-in-section">Renovar</h1>
            </div>
        </section>
    )
}

export default Home;