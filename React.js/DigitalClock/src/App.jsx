import BlocoTempo from './components/blocoTempo';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const {time, setTime} = useState({horas:0, minutos:0, segundos:0});

  function getTime() {
      const now = new Date();

      const horas = now.getHours();
      const minutos = now.getMinutes();
      const segundos = now.getSeconds();
      return {horas, minutos, segundos};
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (t) => t.toString().padStart(2, "0");

  const hours = formatTime(time.horas).split(" ");
  const minutes = formatTime(time.minutos).split(" ");
  const seconds = formatTime(time.segundos).split(" ");

  return (  <>
              <div id="relogio">
                <BlocoTempo tempo={hours[0]} label="Horas1"></BlocoTempo>
                <BlocoTempo tempo={hours[1]} label="Horas2"></BlocoTempo>
                <BlocoTempo tempo={minutes[0]} label="Minutos1"></BlocoTempo>
                <BlocoTempo tempo={minutes[1]} label="Minutos2"></BlocoTempo>
                <BlocoTempo tempo={seconds[0]} label="Segundos1"></BlocoTempo>
                <BlocoTempo tempo={seconds[1]} label="Segundos2"></BlocoTempo>
              </div>
            </>)
}

export default App;
