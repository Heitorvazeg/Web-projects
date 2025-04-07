import key from "../config.js";
import config from "./maps.js"
const {traducoes, icones, imagens} = config;

const button = document.getElementById("mySubmit");

button.onclick = async function Search() {
    try {
        let inputs = document.getElementById("myInput").value.toLowerCase().trim().split(",");

        if (inputs.length < 1 || inputs[0] === "") {
            window.alert("Por favor, insira os dados corretamente!");
            return;
        }
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputs[0]},${inputs[1]},${inputs[2]}&limit=1&appid=${key}`);

        if (!response.ok) {
            window.alert("Algo deu errado!")
            throw new Error("Erro de Fetch!")
        }

        else {
            const location = await response.json();
            const lat = location[0].lat;
            const lon = location[0].lon;

            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
            const tempo = await data.json();

            const temperatura = tempo.main.temp;
            const condicao = tempo.weather[0].main;
            const umidade = tempo.main.humidity;
            const cidade = tempo.name;

            const temp = document.getElementById("temp");
            const cond = document.getElementById("cond");
            const umid = document.getElementById("umid");
            const tempoem = document.getElementById("tempoem");
            const icone = document.getElementById("icone");
            
            document.body.style.backgroundImage = `url('${imagens[condicao]}')`;
            tempoem.textContent = `Tempo em ${cidade}`;
            temp.textContent = temperatura.toFixed(1) + " Cº";
            icone.innerHTML = icones[condicao] || "";
            cond.textContent = traducoes[condicao] || condicao;
            umid.textContent = `Umidade: ${umidade}%`;
        }
    }
    
    catch (error) {
        window.alert("Algo deu errado!")
        console.error(error);
    }
}

window.onload = () => {
    document.getElementById("myInput").value = "Goiânia, Goiás, Brasil";
    document.getElementById("mySubmit").click();
};