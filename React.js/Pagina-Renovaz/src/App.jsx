import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Inicio from "./components/inicio/inicio";
import SobrePag from "./components/sobre/sobrePag";
import Portfolio from "./components/portfolio/portfolio";
import WhatsAppButton from "./components/whatsButton/whatsButton";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ScroolObserver() {
    const location = useLocation();
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
          rootMargin: '0px 0px -122px 0px'
        });
  
        const elements = document.querySelectorAll('.fade-in-section');
        elements.forEach(section => {
            section.classList.remove("is-visible");
            observer.observe(section);
        });
  
        return () => observer.disconnect();
        
    }, [location]);

    return null;
}

function App() {
  return (
      <BrowserRouter>
          <ScroolObserver />
          <ScrollTop />
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