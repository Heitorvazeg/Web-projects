import './App.css'
import { useEffect } from 'react'
import { VisibilityProvider } from "./components/context/context";
import { AppProvider } from './components/context/context';
import Header from './components/header/header'
import Main from './components/main/main'
import Popup from "./components/popup/popup";

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
    <>
      <AppProvider>
        <VisibilityProvider>
          <Header></Header>
          <Main></Main>
          <Popup></Popup>
        </VisibilityProvider>
      </AppProvider>
    </>
  )
}

export default App
