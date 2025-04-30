const entrar = document.getElementById("entrar");

entrar.onclick = async function Entrar() {
    try {
        const email = document.getElementById("emaillog").value;
        const senha = document.getElementById("senhalog").value;

        const response = await fetch("http://localhost:8081/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            }
        )

        if (response.ok) {
            const data = await response.json();
            const message = data.message;
            const token = data.token;
            window.alert(message);
        }
        else {
            const erro = await response.text();
            window.alert(erro);
        }
    }

    catch (error) {
        window.alert(error)
        console.error(error)
    }
}