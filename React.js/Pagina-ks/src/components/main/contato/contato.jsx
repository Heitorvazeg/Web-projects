import "./contato.css"
import Footer from "../../footer/footer";

function Contato() {

    return (
        <section className="contato" id="contato">
            <h1 className="hC fade-in-section">Contato</h1>
            <div className="imagemContatoContatar fade-in-section">
                <div className="email fade-in-section">
                    <div className="descricaoHidden">
                        <i className="fa-solid fa-envelope iconC"></i>
                        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat dolore recusandae quas cum dolorem atque eum exercitationem vitae!
                        Sit deserunt possimus assumenda nisi beatae 
                        repudiandae ipsam in quos delectus unde?</p>
                    </div>
                </div>
                <div className="whatszap fade-in-section">
                     <div className="descricaoHidden">
                        <i className="fa-brands fa-whatsapp iconC"></i>
                        <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat dolore recusandae quas cum dolorem atque eum exercitationem vitae!
                        Sit deserunt possimus assumenda nisi beatae 
                        repudiandae ipsam in quos delectus unde?</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default Contato;