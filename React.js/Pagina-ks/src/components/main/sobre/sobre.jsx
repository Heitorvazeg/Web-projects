import "./sobre.css";

function Sobre() {
    return (
        <section className="sobre" id="sobre">
            <div className="blocoSobre fade-in-section">
                <div className="descricaoSobre fade-in-section">
                    <h1 className="sobreNos">Sobre nós</h1>
                    <p className="lorum">
                        KS: Soluções em TI entrega, com excelência e proximidade, infraestrutura de redes, suporte técnico e cibersegurança — 
                        com foco em soluções de firewall robustas para manter sua empresa sempre protegida.
                     Formada por especialistas apaixonados por tecnologia e comprometidos com a segurança digital, a KS nasceu para atender 
                        à crescente necessidade de redes mais estáveis, seguras e fáceis de gerenciar. Desde o primeiro dia, nosso propósito tem sido claro:
                        garantir que cada cliente mantenha suas operações conectadas, protegidas e em pleno funcionamento, sem surpresas ou interrupções.
                    </p>
                </div>
                <div className="trabalhos">
                    <div className="suporteDiv fade-in-section">
                        <h1 className="h">Suporte em TI</h1>
                        <div className="suporte fade-in-section">
                            <div className="descricaoHidden">
                                <p className="p">
                                    O suporte em TI é o serviço responsável por garantir que toda a estrutura tecnológica de uma empresa funcione corretamente no dia a dia. Ele envolve desde a resolução de problemas simples, como falhas em computadores, até o acompanhamento mais técnico de redes e servidores.
                                </p>
                                <p className="p">
                                    Na KS, oferecemos um suporte ágil e eficiente, que ajuda sua equipe a trabalhar com tranquilidade e segurança. Realizamos a manutenção e configuração de computadores, cuidamos da conectividade da rede, resolvemos erros em sistemas e prestamos atendimento remoto ou presencial sempre que necessário.
                                </p>
                                <p className="p">
                                    Também monitoramos o ambiente de TI para evitar falhas maiores e garantimos que seus dados estejam protegidos com backups confiáveis. Tudo isso com uma comunicação clara, atendimento rápido e soluções pensadas para manter sua empresa sempre em funcionamento.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="infraDiv fade-in-section">
                        <h1 className="h">Infraestrutura de Redes</h1>
                        <div className="infra fade-in-section">
                        <div className="descricaoHidden">
                            <p className="p">
                                A infraestrutura de redes é a base que conecta todos os equipamentos e sistemas de uma empresa, permitindo que a comunicação e o fluxo de dados aconteçam de forma rápida e segura. É ela que garante que computadores, servidores, impressoras e dispositivos móveis consigam se comunicar sem travar ou cair a conexão.
                            </p>
                            <p className="p">
                                Na KS, planejamos, instalamos e organizamos toda essa estrutura de forma inteligente e eficiente, sempre pensando no presente e no crescimento futuro do seu negócio. Montamos redes cabeadas e Wi-Fi estáveis, configuramos switches, roteadores, pontos de acesso e, quando necessário, também realizamos a instalação e configuração de câmeras, integrando segurança física ao ambiente digital. Cuidamos da segmentação da rede para melhorar o desempenho e controlar acessos, evitando congestionamentos e falhas.
                            </p>
                            <p className="p">
                                E, claro, monitoramos tudo de perto, prevenindo problemas antes que eles impactem sua operação. Com uma rede bem feita, sua empresa ganha produtividade, estabilidade e tranquilidade pra focar no que realmente importa.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="cyberDiv fade-in-section">
                        <h1 className="h">Cibersegurança</h1>
                        <div className="cyber fade-in-section">
                            <div className="descricaoHidden">
                                <p className="p">
                                    A cibersegurança é o que protege sua empresa contra invasões, vazamentos de dados e ataques que podem comprometer toda a operação. Em um mundo cada vez mais digital, manter sua rede segura não é mais uma opção — é uma necessidade.
                                </p>
                                <p className="p">
                                    Na KS, cuidamos dessa proteção com foco total em firewall, que é a primeira linha de defesa contra ameaças externas e acessos indevidos. Instalamos, configuramos e monitoramos firewalls de forma personalizada, criando regras que controlam o que entra e o que sai da sua rede.
                                </p>
                                <p className="p">
                                    Também analisamos vulnerabilidades, bloqueamos portas e serviços desnecessários e definimos políticas de acesso para que só pessoas autorizadas tenham contato com informações sensíveis. Tudo isso é feito de forma transparente, sem complicar o dia a dia da sua equipe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Sobre;