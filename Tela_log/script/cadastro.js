const cadastrar = document.getElementById("cadastrar");

cadastrar.onclick = async function Cadastrar() {
    try {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const response = await fetch("http://localhost:8081/cadastro",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
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
            window.alert(data);
        }

        else {
            const erro = await response.text();
            window.alert(erro);
        }

    } catch (error) {
        window.alert(error)
        console.error(error)
    }
}