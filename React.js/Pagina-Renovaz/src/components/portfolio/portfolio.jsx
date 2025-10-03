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