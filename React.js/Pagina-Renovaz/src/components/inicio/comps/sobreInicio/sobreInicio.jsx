import { Link } from "react-router-dom";
import "./sobreInicio.css";

function SobreInicio() {
    return (
        <section className="sobreInicio">
            <div className="sobreInicioTotal fade-in-section">
                <h1 className="tituloSobreInicio fade-in-section">Conheça a Renovaz Construtora</h1>
                <p>Renovaz Construtora é uma empresa com mais de 20 anos de experiência no mercado da construção civil,
                     especializada em construções, reformas, construção em condomínios fechados
                      e projetos personalizados. Nosso compromisso é transformar ideias em realidade, oferecendo qualidade, segurança e soluções inovadoras para cada cliente. Ao longo de duas décadas, conquistamos confiança e reconhecimento graças à nossa dedicação, profissionalismo e atenção aos detalhes em cada obra.
                     Com a Renovaz Construtora, seu projeto é cuidado com excelência, desde o planejamento até a entrega final.</p>
                <h1 className="dois fade-in-section">Transformamos projetos em realidade e construimos confiança há mais de 20 anos</h1>
                <Link to="/Sobre" className="vejaMais">Veja Mais</Link>
            </div>
        </section>
    )
}

export default SobreInicio;