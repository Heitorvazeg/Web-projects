import './Tempo.css';

function BlocoTempo({tempo, label}) {
    return (
            <div className="bloco" id={`bloco${label}`}>
                {tempo}
            </div>
                )
}   

export default BlocoTempo;