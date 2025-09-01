import { useEffect } from "react";

function useE() {
    useEffect(() => {

    }, []);

    return (
        <div>
            <button>Re-renderizar</button>
        </div>
    )
}

export default useE;