import Header from "../header/header";
import Footer from "../footer/footer";
import "./portfolio.css";
import CardPortfolioED from "./cardPortfolio";
import casa from "/casa.jpg"
import valeVerde from "/trab5.PNG";
import jacaranda from "/casa1.jpg";
import fenix from "/fenix.jpg";
import galpoes from "/galpoes.jpg";
import auditorio from "/auditorio.jpg";
import escola from "/escola.jpg";
import ampliacao from "/apliacao.jpg";
import escada from "/trabalho.PNG";

function Portfolio() {
    return (
        <div className="porfolio">
            <Header></Header>
            <div className="portfolioInicio">
                <img src={casa} alt="" />
                <div className="overlay"></div>
                <h1 className="fade-in-section">Portfólio</h1>
                <hr />
                <p className="fade-in-section">Confira alguns dos projetos
                     e obras já realizados pela nossa construtora. 
                     Aqui você pode ver exemplos concretos do nosso trabalho e o resultado de cada construção entregue.</p>
            </div>
            <div className="PortfolioHome ">
                <div className="tituloHr">
                    <h1 className="fade-in-section">Construções</h1>
                    <hr />
                </div>
                <CardPortfolioED
                    srcAlt="Construção em Condomínio Vale Verde"
                    srcImage={valeVerde}
                    srcH1="Condomínio Vale Verde"
                    srcP="Projeto residencial em condomínio, com atenção a cada detalhe do planejamento e execução. A obra priorizou segurança, conforto e estética moderna, criando um ambiente funcional e acolhedor para os moradores. Desde a fundação até o acabamento final, cada etapa foi realizada com precisão e qualidade."
                    srcRecerse={false}
                />

                <CardPortfolioED
                    srcAlt="Residência Jacarandá"
                    srcImage={jacaranda}
                    srcH1="Residência Jacarandá"
                    srcP="Residência projetada para unir design contemporâneo e praticidade no dia a dia. A obra valorizou a iluminação natural, ventilação e materiais duráveis, proporcionando um lar confortável e elegante, refletindo nossa atenção à personalização e à satisfação do cliente."
                    srcRecerse={true}
                />

                <CardPortfolioED
                    srcAlt="Estrutura Fênix Serviços Póstumos"
                    srcImage={fenix}
                    srcH1="Fênix Serviços Póstumos"
                    srcP="Execução da parte estrutural de alta complexidade, garantindo resistência, segurança e precisão técnica. Este projeto destaca nossa capacidade de entregar obras robustas e confiáveis, cumprindo todos os padrões de engenharia e atendendo às necessidades específicas do cliente."
                    srcRecerse={false}
                />

                <CardPortfolioED
                    srcAlt="Auditório Faculdade Unifimes"
                    srcImage={auditorio}
                    srcH1="Auditório Faculdade Unifimes"
                    srcP="Construção de auditório moderno, planejado para eventos acadêmicos e corporativos. O projeto focou em conforto acústico, infraestrutura completa e design contemporâneo, oferecendo funcionalidade, acessibilidade e estética, criando um espaço versátil para diversas atividades."
                    srcRecerse={true}
                />

                <CardPortfolioED
                    srcAlt="Galpões em Aparecida de Goiânia"
                    srcImage={galpoes}
                    srcH1="Galpões em Aparecida de Goiânia"
                    srcP="Projeto de galpões industriais, com estrutura resistente e otimização de espaço. A obra foi desenvolvida para atender padrões de segurança e funcionalidade, permitindo operações eficientes e confiáveis. Este projeto demonstra nossa experiência em construções comerciais e industriais."
                    srcRecerse={false}
                />
                <CardPortfolioED
                    srcAlt="Escola construída em Aparecida de Goiânia"
                    srcImage={escola}
                    srcH1="Escola em Aparecida de Goiânia"
                    srcP="Construção de escola moderna, projetada para oferecer conforto, segurança e acessibilidade. O projeto priorizou salas amplas, iluminação natural e ambientes funcionais, proporcionando um espaço de aprendizado eficiente e acolhedor para alunos e professores."
                    srcRecerse={true}
                />

                <CardPortfolioED
                    srcAlt="Ampliação de galpão industrial"
                    srcImage={ampliacao}
                    srcH1="Ampliação de Galpão Industrial"
                    srcP="Projeto de ampliação com estrutura reforçada e otimização do espaço interno. A obra foi desenvolvida para aumentar a capacidade operacional, mantendo padrões de segurança e eficiência, refletindo nossa experiência em construções industriais de grande porte."
                    srcRecerse={false}
                />

                <CardPortfolioED
                    srcAlt="Escada de acesso em obra industrial"
                    srcImage={escada}
                    srcH1="Escada de Acesso Industrial"
                    srcP="Execução de escada industrial segura e funcional, projetada para facilitar a circulação e atender normas técnicas de segurança. Este projeto destaca nossa atenção aos detalhes e compromisso com a qualidade, mesmo em elementos específicos da obra."
                    srcRecerse={true}
                />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Portfolio;