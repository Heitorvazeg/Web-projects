import Header from "../header/header";
import Footer from "../footer/footer";
import Home from "./comps/home/home";
import SobreInicio from "./comps/sobreInicio/sobreInicio";
import Servicos from "./comps/servicos/servicos";
import Portfolio from "./comps/portfolio/portfolio";

function Inicio() {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <SobreInicio></SobreInicio>
            <Servicos></Servicos>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </div>
    )
}

export default Inicio;