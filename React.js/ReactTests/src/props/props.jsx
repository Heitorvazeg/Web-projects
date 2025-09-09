/* 
    Props: São propriedades que você passa de um componente pai para um
    componente filho.
    Personalizam componentes, possibilitando a reutilização.
    São imutáveis.
*/

function Saudacao({ nome }) {
    return <h1>Olá,{nome}</h1>
}

function App2() {
    return <Saudacao nome="Heitor"></Saudacao>
}

/* Pode desestruturar como objeto: {nome, idade}, ou usar o objeto
(props), props.nome, props.idade. 

Props com valores padrões são ativadas quando não passar propriedades:*/

Saudacao.defaultProps = {
    nome: "Visitante"
}

// é possível passar funções como props

function Botao({onClick, text}) {
    return <button onClick={onClick}>{text}</button>
}

function App3() {
    const handleClick = () => alert("Click!");
    return <Botao onClick={handleClick} text="Clique!!"></Botao>
}

// Props children: Passa as tags filhas do componente para dentro do componente
// Tudo que está dentro das tags da function se torna o children