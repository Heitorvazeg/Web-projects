import "./servicos.css";
import notfound from '../../../assets/notfound.jpeg'

function Servicos() {
    return (
        <section className="servicos" id="servicos">
            <h1 className="h">Serviços</h1>
            <div className="ts">
                <div className="esquerdaT fade-in-section">
                    <img src={notfound} alt="not found" className="imagem fade-in-section"/>
                    <h2>Suporte em Infraestrutura à Mater Dei</h2>
                    <p></p>
                </div>
                <div className="direitaT fade-in-section">
                    <h2>Suporte em TI à Humana</h2>
                    <p></p>
                    <img src={notfound} alt="" className="imagem d fade-in-section"/>
                </div>
                <div className="esquerdaT fade-in-section">
                    <img src={notfound} alt="not found" className="imagem fade-in-section"/>
                    <h2></h2>
                    <p></p>
                </div>
                <div className="direitaT fade-in-section">
                    <h2></h2>
                    <p></p>
                    <img src={notfound} alt="not found" className="imagem d fade-in-section"/>
                </div>
            </div>
        </section>
    )
}

export default Servicos;