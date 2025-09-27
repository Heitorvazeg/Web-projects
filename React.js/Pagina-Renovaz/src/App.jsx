import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Inicio from "./components/inicio/inicio";
import SobrePag from "./components/sobre/sobrePag";
import Portfolio from "./components/portfolio/portfolio";
import WhatsAppButton from "./components/whatsButton/whatsButton";

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, {
          root: null,
          rootMargin: '0px 0px -144px 0px'
        });
  
        document.querySelectorAll('.fade-in-section').forEach(section => {
          observer.observe(section);
        });
  
        return () => observer.disconnect();
        
    }, []);

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