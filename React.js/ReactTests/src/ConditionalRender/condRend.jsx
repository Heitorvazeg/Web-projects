/* 
    Mostra (ou não) partes da interface com base no estado da aplicação.
    Estados comuns: Loading, error, empty, sucess, aunthenticated...

    Gera melhor performance, apenas renderiza quando necessário, separa respon-
    sabilidades e gera feedback mais claro.

    O operador ternário aparece muito.
*/

function Exemplo({ user }) {
    return (
        <div>
            {user ? <p>Olá, {user.name}</p> : <p>Faça login</p>}
        </div>
    )
}

// && é bom para renderizar com condições.
// Antes do && deve ser um valor não renderizável, senão sempre entra
// Evite valores númericos
{isAdmin && <button>Apagar usuário</button>}

// Guard clauses auxiliam no controle
function Dashboard({data, loading, error}) {
    if (loading) return <Loading/>;
    if (error) return <Error/>;

    if (!data || data.length === 0) return <EmptyState/>;
    return <MainView data={data} />;
}

// Portals geram renders condicionais fora da árvore principal
// Bom para modais
// Continua integrado ao estado e contexto do React
{isModalOpen && createPortal(<Modal/>, document.body)}

// Condicional em atributos:
<button className={"btn ${isActive ? 'btn--active' : ''"}>Ok</button>