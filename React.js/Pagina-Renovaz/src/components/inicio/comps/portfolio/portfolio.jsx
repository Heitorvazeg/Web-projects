import { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            "srcImage": "",
            "altImage": "",

        },
        {
            "srcImage": "",
            "altImage": "",

        },
        {
            "srcImage": "",
            "altImage": "",

        },
        {
            "srcImage": "",
            "altImage": "",

        },
    ]

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev-1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev == slides.length - 1 ? 0 : prev+1));
    };

    return (
        <section>
            <div className="topoPortfolio">
                <h1>Nosso Portfólio</h1>
                <p>No portfólio da Renovaz Construtora, você encontra exemplos concretos do nosso trabalho ao longo de mais de 20 anos de experiência
                      desde construções e reformas até acabamentos e instalações completas.
                       Acreditamos que cada obra conta uma história, e nosso portfólio é a melhor forma de mostrar como transformamos
                     ideias em realidade, sempre respeitando as necessidades e expectativas de nossos clientes.</p>
            </div>
            <div className="carousel">
                <button className="navLeft">&lt;</button>
                <div className="slide">
                    <img src={slides[index].srcImage} alt={slides[index].altImage} />
                    <p className="descricaoSlide"></p>
                </div>
                <button className="navRight">&gt;</button>
            </div>
            <Link to="/Portfolio">Conheça mais sobre nosso porfólio</Link>
        </section>
    )
}

export default Portfolio;