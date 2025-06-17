import "./servicos.css";
import notfound from '../../../assets/notfound.jpeg'

function Servicos() {
    return (
        <section className="servicos" id="servicos">
            <div className="ts">
                <div className="esquerdaT">
                    <img src={notfound} alt="not found" className="imagem"/>
                    <h2></h2>
                    <p></p>
                </div>
                <div className="direitaT">
                    <img src="" alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div className="esquerdaT">
                    <img src={notfound} alt="not found" className="imagem"/>
                    <h2></h2>
                    <p></p>
                </div>
                <div className="direitaT">
                    <img src={notfound} alt="not found" className="imagem"/>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </section>
    )
}

export default Servicos;