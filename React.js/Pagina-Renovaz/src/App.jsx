import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import SobrePag from "./components/sobre/sobrePag";
import Portfolio from "./components/portfolio/portfolio";
import WhatsAppButton from "./components/whatsButton/whatsButton";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/Sobre" element={<SobrePag/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
        </Routes>

        <WhatsAppButton/>
        
      </BrowserRouter>
  )
}

export default App;