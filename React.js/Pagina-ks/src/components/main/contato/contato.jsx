import "./contato.css"
import Footer from "../../footer/footer";

function Contato() {

    return (
        <section className="contato" id="contato">
            <h1 className="hC fade-in-section">Contato</h1>
            <p className="p3 fade-in-section">Entre em contato conosco para solicitar um orçamento, tirar dúvidas ou obter mais informações sobre nossos serviços.</p>
            <p className="p3 fade-in-section">Nosso e-mail está disponível para atendimentos formais, com retorno rápido e detalhado.
Também oferecemos atendimento via WhatsApp, para uma comunicação mais ágil e objetiva, sem abrir mão da qualidade no suporte.

Estamos à disposição para atender sua empresa com eficiência e comprometimento.</p>
            <div className="imagemContatoContatar fade-in-section">
                <div className="email fade-in-section">
                    <div className="descricaoHidden">
                        <i className="fa-solid fa-envelope iconC"></i>
                        <div className="imageNum" id="imageNum">
                            <h3 className="cont">Contato:</h3>
                            <p>kaiosousa@gmail.com</p>
                            <a href="mailto:heitorvazeg@gmail.com" className="contatar">Contatar</a>
                        </div>
                    </div>
                </div>
                <div className="whatszap fade-in-section">
                     <div className="descricaoHidden">
                        <i className="fa-brands fa-whatsapp iconC"></i>
                        <div className="imageNum" id="imageNum2">
                            <h3 className="cont">Contato:</h3>
                            <p>(62) 99563-5794</p>
                            <a href="https://wa.me/5562995635794" className="contatar">Contatar</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default Contato;