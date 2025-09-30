import "./servicoCard.css";

function ServicoCard({titulo, descricao, srcImage, altImage}) {
    return (
        <div className="servicoCard">
            <img src={srcImage} alt={altImage} className="imgServicos"/>
            <div className="td">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default ServicoCard;