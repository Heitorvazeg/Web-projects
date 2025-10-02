import Header from "../header/header";
import Footer from "../footer/footer";
import Home from "./comps/home/home";
import SobreInicio from "./comps/sobreInicio/sobreInicio";
import Servicos from "./comps/servicos/servicos";
import Portfolio from "./comps/portfolio/portfolio";
import Midias from "./comps/midias/midias";
import FaixaFinal from "./comps/midias/faixaFinal";

function Inicio() {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <SobreInicio></SobreInicio>
            <Servicos></Servicos>
            <Portfolio></Portfolio>
            <Midias></Midias>
            <FaixaFinal></FaixaFinal>
            <Footer></Footer>
        </div>
    )
}

export default Inicio;