import ServicoCard from "./servicoCard";
import "./servicos.css";
import ReformaImg from "./reforma.jpg";
import ConstrucaoImg from "./construcao.jpg";
import Plan from "./plan.jpg"

function Servicos() {
    return (
        <section className="servicos">
            <h1>Nossa carta de serviços</h1>
            <div className="cards">
                <ServicoCard
                    titulo="Construção em Condomínios"
                    descricao="Realizamos projetos de construção do zero,
                     transformando terrenos e ideias em edificações sólidas, modernas e funcionais,
                      sempre com qualidade em cada etapa da obra."
                    srcImage={ConstrucaoImg}
                    altImage="Imagem Construção"
                ></ServicoCard>
                <ServicoCard
                    titulo="Reforma"
                    descricao="Oferecemos serviços de reforma para revitalizar e modernizar ambientes,
                     adaptando espaços às necessidades do cliente."
                    srcImage={ReformaImg}
                    altImage="Imagem Reforma"
                ></ServicoCard>
                <ServicoCard
                    titulo="Acabamentos e Instalações"
                    descricao="Cuidamos de cada detalhe final da obra,
                     incluindo pisos, revestimentos, pintura e design de interiores, garantindo um resultado estético e duradouro.
                      Além disso, executamos instalações
                      hidráulicas e prediais com eficiência."
                    srcImage={Plan}
                    altImage="Imagem de acabamentos"
                ></ServicoCard>
            </div>
        </section>
    )
}

export default Servicos;