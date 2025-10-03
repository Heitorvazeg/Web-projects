import "./midias.css";
import insta from "/insta2.jpg";
import tikVideo from "/Download.mp4";

function Midias() {
    return (
        <section className="midias">
            <h1 className="fade-in-section">Nossas Mídias</h1>
            <p className="fade-in-section">Aqui você encontra um acervo de construções e projetos já realizados pela nossa empresa.
                 Reunimos registros das obras concluídas e em andamento para que nossos clientes possam conhecer melhor o padrão de qualidade,
                  os estilos de projetos desenvolvidos e a experiência que acumulamos no setor da construção civil.
                 Este espaço é dedicado a mostrar na prática o trabalho que entregamos, desde pequenas reformas até grandes empreendimentos.</p>
            <div className="Midia fade-in-section">
                <div className="descricaoMidia fade-in-section">
                    <h1>Tik-Tok</h1>
                    <p>No nosso TikTok você encontra conteúdos rápidos e dinâmicos sobre o universo da construção civil 
                        e os projetos que realizamos. Mostramos transformações de obras, etapas de execução, 
                        detalhes de acabamentos e também dicas que refletem nossa experiência no setor. A proposta é compartilhar, 
                        de forma leve e acessível, o dia a dia da construtora e aproximar ainda mais quem acompanha nosso trabalho. 
                        É um espaço onde apresentamos nossas
                         construções de maneira criativa e envolvente, permitindo que clientes e interessados conheçam de perto como cada projeto ganha vida.</p>
                    <a href="https://www.tiktok.com/@mestredosprojetos?lang=pt-BR" target="_blank" className="btnM tik"><i className="fa-brands fa-tiktok"></i></a>
                    <label htmlFor="tik"><a href="https://www.tiktok.com/@mestredosprojetos?lang=pt-BR" 
                    target="_blank" className="tikL">@mestredosprojetos</a></label>
                </div>
                <video autoPlay muted loop className="bg-video2 fade-in-section">
                    <source src={tikVideo} type="video/mp4"/>
                </video>            
            </div>
            <div className="Midia reverse fade-in-section">
                <div className="descricaoMidia fade-in-section">
                    <h1>Instagram</h1>
                    <p>No nosso Instagram você acompanha de perto o dia a dia da construtora, com fotos e vídeos das obras,
                         etapas de projetos, bastidores e resultados finais. É um espaço pensado para mostrar de forma prática o trabalho que realizamos, 
                         compartilhar ideias de construção e inspiração para novos projetos. Além disso,
                          usamos o Instagram para manter um contato mais próximo com clientes, parceiros e interessados no setor,
                         trazendo novidades, atualizações e conteúdos que reforçam nossa experiência e dedicação na área da construção civil.</p>
                    <a href="https://www.instagram.com/renovazconstrutora/" target="_blank" className="btnM ins"><i className="fa-brands fa-instagram"></i></a>
                    <label htmlFor="ins"><a href="https://www.instagram.com/renovazconstrutora/" 
                    target="_blank" className="insL">@renovazconstrutora</a></label>
                </div>
                <img src={insta} alt="Imagem Instagram" className="bg-video2"/>
            </div>
        </section>
    )
}

export default Midias;