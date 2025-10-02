import { useState } from "react";
import { Link } from "react-router-dom";
import planej from "./planej.jpg";
import usinas from "./usina.jpg";
import s from "./s.jpg";
import t from "./t.jpg";
import "./portfolio.css"

function Portfolio() {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            "srcImage": planej,
            "altImage": "Imagem de planejamento de obra",
            "descricaoImage": "Construção feita não sei aonde",
            "tituloObra": "Obra feita ali",

        },
        {
            "srcImage": usinas,
            "altImage": "Imagem de usinas de obra",
            "descricaoImage": "Descrição descrição descrição",
            "tituloObra": "Obra feita ali",

        },
        {
            "srcImage": s,
            "altImage": "",
            "descricaoImage": "Descrição ao ao ao ao",
            "tituloObra": "Obra feita ali",

        },
        {
            "srcImage": t,
            "altImage": "",
            "descricaoImage": "",
            "tituloObra": "Obra feita ali",

        },
    ]

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev-1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev == slides.length - 1 ? 0 : prev+1));
    };

    return (
        <section className="portfolio">
            <div className="topoPortfolio fade-in-section">
                <h1>Nosso Portfólio</h1>
                <p>No portfólio da Renovaz Construtora, você encontra exemplos concretos do nosso trabalho ao longo de mais de 20 anos de experiência
                      desde construções e reformas até acabamentos e instalações completas.
                       Acreditamos que cada obra conta uma história, e nosso portfólio é a melhor forma de mostrar como transformamos
                     ideias em realidade, sempre respeitando as necessidades e expectativas de nossos clientes.</p>
            </div>
            <div className="carousel">
                <button className="navPtr" onClick={prevSlide}>&lt;</button>
                    <div className="slidesWrapper">
                        {slides.map((slide, i) => {
                            let className = "slide";
                            if (i === index) className += " active"; // imagem do meio
                            else if (i === (index + 1) % slides.length) className += " right"; // próxima
                            else if (i === (index - 1 + slides.length) % slides.length)
                            className += " left"; // anterior
                            else className += " hidden"; // esconde o resto

                            return (
                            <div className={className} key={i}>
                                <img src={slide.srcImage} alt={slide.altImage} />
                                {i === index && (
                                <div className="tituloObra">{slide.tituloObra}</div>
                                )}
                            </div>
                            );
                        })}
                    </div>
                <button className="navPtr" onClick={nextSlide}>&gt;</button>
            </div>
            <p className="descricaoSlide">{slides[index].descricaoImage}</p>
            <Link to="/Portfolio" className="conhecaMais">Conheça mais sobre nosso porfólio</Link>
        </section>
    )
}

export default Portfolio;