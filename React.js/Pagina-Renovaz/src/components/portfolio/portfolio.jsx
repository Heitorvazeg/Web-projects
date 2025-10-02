import Header from "../header/header";
import Footer from "../footer/footer";
import CardPortfolioED from "./cardPortfolio";
import imagem from "/imagem.jpg";
import casa from "/casa.jpg";
import back from "/back.jpg";
import "./portfolio.css";

function Portfolio() {
    return (
        <div className="porfolio">
            <Header></Header>
            <div className="portfolioInicio">
                <img src={casa} alt="" />
                <div className="overlay"></div>
                 <h1 className="fade-in-section">Portfólio</h1>
                 <hr />
                <p className="fade-in-section">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dolorum, nemo, libero nesciunt sapiente, expedita eius quo nihil quod dolor quibusdam! Obcaecati repellendus odio incidunt nostrum sit, at natus! Tempore.</p>
            </div>
            <div className="PortfolioHome ">
                <h1 className="fade-in-section">Construções</h1>
                <hr />
                <CardPortfolioED
                    srcAlt="altaerntiv"
                    srcImage={imagem}
                    srcH1="Obra ali"
                    srcP="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    srcRecerse={false}
                ></CardPortfolioED>
                <CardPortfolioED
                    srcAlt="altaerntiv"
                    srcImage={imagem}
                    srcH1="Obra ali"
                    srcP=""
                    srcRecerse={true}
                ></CardPortfolioED>
                <CardPortfolioED
                    srcAlt="altaerntiv"
                    srcImage={imagem}
                    srcH1="Obra ali"
                    srcP=""
                    srcRecerse={false}
                ></CardPortfolioED>
                <CardPortfolioED
                    srcAlt="altaerntiv"
                    srcImage={imagem}
                    srcH1="Obra ali"
                    srcP=""
                    srcRecerse={true}
                ></CardPortfolioED>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Portfolio;