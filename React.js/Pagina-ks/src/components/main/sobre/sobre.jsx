import "./sobre.css";

function Sobre() {
    return (
        <section className="sobre" id="sobre">
            <div className="blocoSobre fade-in-section">
                <div className="descricaoSobre fade-in-section">
                    <h1 className="sobreNos">Sobre nós</h1>
                    <p className="lorum">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea necessitatibus, voluptate dolore possimus quam. Commodi, id? Vero at iure placeat modi nam ipsam aliquam? Officiis recusandae error nemo libero.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem sint vitae reprehenderit temporibus, deleniti est nisi repudiandae? Eaque quasi impedit debitis alias quidem itaque dolor similique dignissimos, nemo placeat?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe quisquam optio deleniti natus, dolorum quod aliquam, voluptatibus rem sunt molestiae illo in! Provident consequuntur saepe porro sequi id eligendi.
                    </p>
                </div>
                <div className="trabalhos">
                    <div className="suporteDiv fade-in-section">
                        <h1 className="h">Suporte em TI</h1>
                        <div className="suporte fade-in-section">
                            <div className="descricaoHidden">
                                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Fugiat dolore recusandae quas cum dolorem atque eum exercitationem vitae!
                                Sit deserunt possimus assumenda nisi beatae 
                                repudiandae ipsam in quos delectus unde?</p>
                            </div>
                        </div>
                    </div>
                    <div className="infraDiv fade-in-section">
                        <h1 className="h">Infraestrutura de Redes</h1>
                        <div className="infra fade-in-section">
                            <div className="descricaoHidden">
                                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus a id, nemo exercitationem magni,
                                repellendus modi ducimus dolores eligendi libero aliquam atque tempore
                                reiciendis totam, explicabo in impedit nihil!</p>
                            </div>
                        </div>
                    </div>
                    <div className="cyberDiv fade-in-section">
                        <h1 className="h">Cibersegurança</h1>
                        <div className="cyber fade-in-section">
                            <div className="descricaoHidden">
                                <p className="p">Lorem ipsum dolor sit, 
                                amet consectetur adipisicing elit. Esse cum atque, debitis 
                                soluta amet nobis aperiam adipisci pariatur hic. Ad dignissimos
                                veniam, dolorum officiis vel saepe non rerum odit error?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Sobre;