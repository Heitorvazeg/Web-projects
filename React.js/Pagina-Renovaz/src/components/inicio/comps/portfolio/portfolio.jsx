import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <section>
            <div className="carousel">
                <button className="navLeft">&lt;</button>
                <div className="slide">
                    <img src="" alt="" />
                    <p className="descricaoSlide"></p>
                </div>
                <button className="navRight">&gt;</button>
            </div>
            <Link to="/Portfolio">Conheça mais sobre nosso porfólio</Link>
        </section>
    )
}

export default Portfolio;