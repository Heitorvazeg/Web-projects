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
                <p className="fade-in-section">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dolorum, nemo, libero nesciunt sapiente, expedita eius quo nihil quod dolor quibusdam! Obcaecati repellendus odio incidunt nostrum sit, at natus! Tempore.</p>
            </div>
            <div className="sobreNoss">
                <h1>Quem Somos</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat perspiciatis libero soluta, cumque totam quibusdam omnis aut, a saepe recusandae illum odit. Magnam nulla commodi laborum, dolores itaque perspiciatis.</p>
                <h1>Nossa Missão</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil enim dignissimos error, ipsum eius laboriosam praesentium aut ipsam expedita voluptas numquam deserunt pariatur natus molestiae neque? Quae, culpa sint? Incidunt.</p>
                <h1>História</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, a ipsum. Optio deserunt illo, magnam similique aspernatur nostrum amet tenetur vero tempora incidunt minima, iure iste blanditiis iusto, velit nemo.</p>
                <div className="historia">
                    <CardPortfolioED></CardPortfolioED>
                    <CardPortfolioED srcRecerse={true}></CardPortfolioED>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet fugit laudantium libero, explicabo ipsa, necessitatibus delectus eos tenetur odio et ad ut perspiciatis molestiae totam voluptates, tempore quidem sequi!</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default SobrePag;