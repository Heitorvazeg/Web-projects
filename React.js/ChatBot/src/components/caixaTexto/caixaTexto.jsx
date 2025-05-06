import './caixaTexto.css';

function CaixaTexto() {
    return (
        <footer>
            <button id='plus'><i class="fa-solid fa-plus"></i></button>
            <input type="text" placeholder=" text:" id='input'/>
            <button id='send'><i class="fa-solid fa-paper-plane"></i></button>
        </footer>
    )
}

export default CaixaTexto;