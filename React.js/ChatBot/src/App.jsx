import HeaderPage from "./components/headerPage/headerPage";
import CorpoPage from "./components/corpoPage/corpoPage";
import CaixaTexto from "./components/caixaTexto/caixaTexto";
import './App.css';

function App() {
  return (
    <div className="app">
          <HeaderPage></HeaderPage>
          <CorpoPage mensagens={array}></CorpoPage>
          <CaixaTexto></CaixaTexto>
    </div>
  )
}

export default App;