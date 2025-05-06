import './corpoPage.css';
import '../typingEffect';

function CorpoPage({mensagens}) {
    return (
        <main>
            <h1 id='welcome'>Seja Bem Vindo!</h1>
            <div className="corpo">
                {mensagens.map((item, index) => (
                    <div key={index}>
                    <div className="mensagem">
                      <img src="../../assets/user.jpg" alt="imagem perfil usuario" />
                      <div className="m">
                        <p>{item.mensagem}</p>
                      </div>
                    </div>
                    <div className="resposta">
                      <img src="../../assets/chat.jpg" alt="Imagem perfil chat" />
                      <div className="r">
                        <TypingEffect text={item.resposta}/>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </main>
    )
}

export default CorpoPage;