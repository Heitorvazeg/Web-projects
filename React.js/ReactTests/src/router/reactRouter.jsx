/* 
    React Router permite que você navegue entre páginas sem recarregar
    o site.
    URL's amigáveis.
    
    --npm install react-router-dom

    em rotas dinâmicas, com useParams pode passar dados necessários
    para o componente que vai ser renderizado.
    const {x} = useParams();
    return <h1>Usuario {x}</h1>

    useNavigate() -> Comanda rotas por código. Tipo dps do login.
    const handleLogin = () => {`navigate("/dashboard")} isso apos o codigo de login.

    BrowserRouter: Envolve a aplicação e habilita o roteamento.
    Routes: Container para todas as rotas.
    Route: Cada rota individual definida em um path (URL) e element, o compo-
    nente a ser renderizado. Pode fazer subrotas em uma rota.
    Link: Substitui <a> para navegação sem recarregar página.
*/

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";

function App4() {
    return (
         <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre/:id">Sobre</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Sobre" element={<Sobre/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App4;