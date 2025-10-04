import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import CardPortfolioED from "../portfolio/cardPortfolio.jsx";
import casa2 from "/casa2.jpg";
import "./sobrePag.css";
import Carpenter from "/carpenter.jpg";
import Antiga from "/antiga.jpg";

function SobrePag() {
    return (
        <div className="sobrePag">
            <Header></Header>
            <div className="portfolioInicio">
                <img src={casa2} alt="" />
                <div className="overlay"></div>
                    <h1 className="fade-in-section">Sobre Nós</h1>
                    <hr />
                <p className="fade-in-section">Somos uma construtora dedicada à execução de obras e reformas, garantindo que cada projeto seja realizado com cuidado e atenção às necessidades dos nossos clientes.</p>
            </div>
            <div className="sobreNoss">
                <h1 className="fade-in-section">Quem Somos</h1>
                <p className="fade-in-section">A Renovaz Construtora é uma empresa que atua há mais de 20 anos no mercado da construção civil,
                     oferecendo serviços de construção,
                     reforma e manutenção com foco em qualidade, responsabilidade e compromisso. Ao longo da nossa trajetória,
                      conquistamos a confiança de clientes e parceiros por meio de um trabalho sério, rápido e pautado em resultados.
                    Nossa equipe é formada por profissionais experientes
                     comprometidos em entregar obras com alto padrão técnico e estético.
                      Trabalhamos com atenção em cada detalhe, desde o planejamento até a finalização, 
                      garantindo que cada etapa do processo seja feita com cuidado e eficiência.</p>
                <p className="fade-in-section">Com experiência em construções dentro de condomínios residenciais e comerciais, 
                    entendemos a importância de manter um ambiente organizado e seguro.
                    Na Renovaz, acreditamos que construir é mais do que erguer estruturas — é criar espaços que geram conforto,
                     segurança e valorização. Nosso compromisso é transformar ideias em realidade, sempre buscando inovação, 
                     qualidade e satisfação do cliente. Seja para uma nova obra ou uma reforma, cada projeto é tratado como único.
                      A dedicação, o profissionalismo e a busca constante pela excelência fazem da Renovaz Construtora uma referência em 
                      obras e reformas de condomínios.</p>
                <h1 className="fade-in-section">História</h1>
                <p className="fade-in-section">A Renovaz Construtora começou há mais de 20 anos, com o objetivo de oferecer construções
                     e reformas de qualidade para residências e condomínios. Desde o início, nosso foco foi entregar projetos bem
                      planejados, com atenção aos detalhes e respeito aos clientes. Nos primeiros anos, realizamos pequenas obras,
                       aprendendo e aperfeiçoando cada etapa do processo. Com dedicação e profissionalismo, conquistamos a confiança
                        de nossos clientes e parceiros, o que permitiu que crescêssemos e assumíssemos projetos maiores, incluindo
                         construções em condomínios residenciais e comerciais. Ao longo do tempo, a Renovaz se tornou referência por
                          qualidade, organização e cumprimento de prazos. Cada obra é planejada e executada com cuidado, garantindo 
                          segurança, conforto e durabilidade.</p>
                <div className="historia">
                    <CardPortfolioED 
                        srcImage={Antiga}
                        srcAlt="Imagem antiga da construtora"
                        srcRecerse={false}
                        srcH1="Nossa Origem"
                        srcP="Esta imagem representa os primeiros passos da Renovaz Construtora. Ao longo dos anos, nossa dedicação e
                         profissionalismo nos permitiram crescer de forma consistente, assumir obras cada vez mais complexas e consolidar
                          nossa reputação no mercado da construção civil. Cada desafio enfrentado reforçou nossa experiência e aprimorou
                           nossas práticas, permitindo que hoje possamos oferecer soluções completas e personalizadas para nossos
                            clientes. Nossa trajetória é marcada por esforço, inovação e confiança, valores que continuam guiando
                             cada obra que realizamos e cada projeto que transformamos em realidade."

                    ></CardPortfolioED>
                    <CardPortfolioED 
                        srcImage={Carpenter}
                        srcAlt="Imagem Carlos Junior"
                        srcRecerse={true}
                        srcH1="Construtora Hoje"
                        srcP="Agora, nossa construtora se consolidou como referência em construções de condomínios, unindo experiência, inovação e atenção aos detalhes. Contamos com uma equipe qualificada que garante projetos seguros, duráveis e planejados para atender às necessidades de cada cliente, sempre com compromisso e excelência em cada etapa da obra."
                    ></CardPortfolioED>
                </div>
                <p className="fade-in-section">Ao longo de mais de 20 anos, a Renovaz Construtora vem se consolidando como referência
                     em construções e reformas de condomínios. Cada projeto é tratado com cuidado e dedicação, garantindo segurança,
                      durabilidade e conforto. Nossa equipe trabalha unida para transformar ideias em realidade, sempre respeitando prazos
                       e expectativas. Com atenção aos detalhes e compromisso com a excelência, buscamos superar as necessidades de cada
                        cliente. Construir com qualidade e confiança é a essência da Renovaz.</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default SobrePag;