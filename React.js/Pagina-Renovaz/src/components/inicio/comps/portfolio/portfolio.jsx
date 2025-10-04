import { useState } from "react";
import { Link } from "react-router-dom";
import valeVerde from "/trab5.PNG";
import jacaranda from "/casa1.jpg";
import fenix from "/fenix.jpg";
import galpoes from "/galpoes.jpg";
import auditorio from "/auditorio.jpg";
import "./portfolio.css"

function Portfolio() {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            "srcImage": valeVerde,
            "altImage": "Imagem construção Condomínio Vale Verde",
            "descricaoImage": "Execução completa de obra no Condomínio Vale Verde, contemplando fundação, estrutura, alvenaria e acabamento final com excelência.",
            "tituloObra": "Vale Verde",

        },
        {
            "srcImage": jacaranda,
            "altImage": "Imagem construção Condomínio Jacarandá",
            "descricaoImage": "Execução de obra no Condomínio Jacarandá: Fundação, estrutura, alvenaria e acabamento",
            "tituloObra": "Jacarandá",

        },
        {
            "srcImage": fenix,
            "altImage": "Parte estrutural Fênix Serviços Póstumos",
            "descricaoImage": "Construção da estrutura principal da Fênix Serviços Póstumos, incluindo fundações, pilares e lajes executados com rigor técnico e materiais de alto desempenho.",
            "tituloObra": "Fênix Serviços Póstumos",

        },
        {
            "srcImage": galpoes,
            "altImage": "Imagem Galpões",
            "descricaoImage": "Execução completa de galpões industriais em Aparecida de Goiânia, contemplando fundações, estrutura metálica e acabamento",
            "tituloObra": "Galpões em Aparecida de Goiânia",

        },
        {
            "srcImage": auditorio,
            "altImage": "Imagem Auditório faculdade Unifimes",
            "descricaoImage": "Execução da estrutura e acabamento do auditório da Faculdade Unifimes.",
            "tituloObra": "Auditório Faculdade Unifimes",
        }
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
                      desde construções e reformas até acabamentos e instalações completas. </p>
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