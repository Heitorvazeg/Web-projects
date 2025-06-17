import Contato from "./contato/contato";
import Home from "./home/home";
import Servicos from "./servicos/servicos";
import Sobre from "./sobre/sobre";

function Main() {
    return (
        <section id="main">
            <Home></Home>
            <Sobre></Sobre>
            <Servicos></Servicos>
            <Contato></Contato>
        </section>
    )
}

export default Main;