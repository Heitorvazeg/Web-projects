import "./cardPortfolio.css";

function CardPortfolioED({srcImage, srcAlt, srcH1, srcP, srcRecerse}) {
    return (
        <div className={srcRecerse ? "card reverse fade-in-section" : "card fade-in-section"}>
            <img src={srcImage} alt={srcAlt} />
            <div className="descricaoPort">
                <h1 className="fade-in-section">{srcH1}</h1>
                <p className="fade-in-section">{srcP}</p>
            </div>
        </div>
    )
}

export default CardPortfolioED;