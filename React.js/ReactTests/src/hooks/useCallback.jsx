/* Memoriza uma função muito pesada. Toda vez que precisar dela
não precisa rendenrizar novamente. Mas quando tiver dependências diferentes
ele ainda assim re-renderiza.
Evita renderizações desnecessárias quando um estado muda.
Não é barato usar o useCallback, usar apenas quando for caso extremo.

O array de dependências se passar um array com um valor a função só é
recriada se o valor mudar. Ou seja, caso o valor esteja armazenado, não re-renderiza
componentes e funções de forma desnecessária.*/

import { useCallback } from "react";

function Caksadkas() {
    const addTodo = useCallback(() => {

    }, [])
}