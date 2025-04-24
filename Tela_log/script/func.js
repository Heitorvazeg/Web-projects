const cadastrar = document.getElementById("cadastrar");
const entrar = document.getElementById("entrar");

cadastrar.onclick = async function Cadastrar() {
    try {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const response = await fetch("http://localhost:8081/cadastro",
            {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    nome: nome, 
                    email: email,
                    senha: senha
                })
            }
        );

        if (response.ok) {
            const data = await response.text()
            window.alert("Sucesso: + "+data);
        }

        else {
            const erro = await response.text();
            window.alert("Erro: "+erro);
        }

    } catch (error) {
        console.error(error)
    }
}

entrar.onclick = async function Entrar() {
    
}