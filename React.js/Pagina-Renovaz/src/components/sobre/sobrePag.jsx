import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import CardPortfolioED from "../portfolio/cardPortfolio.jsx";
import casa2 from "/casa2.jpg";
import "./sobrePag.css";

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
                <p className="fade-in-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat perspiciatis libero soluta, cumque totam quibusdam omnis aut, a saepe recusandae illum odit. Magnam nulla commodi laborum, dolores itaque perspiciatis.</p>
                <h1 className="fade-in-section">Nossa Missão</h1>
                <p className="fade-in-section">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil enim dignissimos error, ipsum eius laboriosam praesentium aut ipsam expedita voluptas numquam deserunt pariatur natus molestiae neque? Quae, culpa sint? Incidunt.</p>
                <h1 className="fade-in-section">História</h1>
                <p className="fade-in-section">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, a ipsum. Optio deserunt illo, magnam similique aspernatur nostrum amet tenetur vero tempora incidunt minima, iure iste blanditiis iusto, velit nemo.</p>
                <div className="historia">
                    <CardPortfolioED></CardPortfolioED>
                    <CardPortfolioED srcRecerse={true}></CardPortfolioED>
                </div>
                <p className="fade-in-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet fugit laudantium libero, explicabo ipsa, necessitatibus delectus eos tenetur odio et ad ut perspiciatis molestiae totam voluptates, tempore quidem sequi!</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default SobrePag;