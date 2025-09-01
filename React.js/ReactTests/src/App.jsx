import UsS from "./hooks/useState";
import { NumProvider } from "./hooks/useContext";

function App() {
  return (
    <NumProvider>
      <UsS></UsS>
    </NumProvider>
  )
}

export default App;