import "./midias.css";
import videoSrc from "/video.mp4";

function Midias() {
    return (
        <section className="midias">
            <h1 className="fade-in-section">Nossas Mídias</h1>
            <p className="fade-in-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius ea et culpa architecto placeat, qui reprehenderit natus laudantium provident officia similique, doloremque repellendus saepe vero unde nesciunt! Eum, quisquam.</p>
            <div className="Midia fade-in-section">
                <div className="descricaoMidia fade-in-section">
                    <h1>Tik-Tok</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est! Obcaecati nesciunt ullam temporibus exercitationem veniam consequuntur ducimus itaque, suscipit pariatur eius voluptate praesentium qui expedita laudantium! Atque, dolorum unde.</p>
                    <button></button>
                </div>
                <video autoPlay muted loop className="bg-video2 fade-in-section">
                    <source src={videoSrc} type="video/mp4"/>
                </video>            
            </div>
            <div className="Midia reverse fade-in-section">
                <div className="descricaoMidia fade-in-section">
                    <h1>Instagram</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est! Obcaecati nesciunt ullam temporibus exercitationem veniam consequuntur ducimus itaque, suscipit pariatur eius voluptate praesentium qui expedita laudantium! Atque, dolorum unde.</p>
                    <button></button>
                </div>
                <video autoPlay muted loop className="bg-video2 fade-in-section">
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}

export default Midias;