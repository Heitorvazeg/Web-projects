import { useContext } from "react";
import { ContContext } from "./useContext";

function UsS() {
    const { num, setNum } = useContext(ContContext);
    let aumentar = () => setNum(prev => prev+1);

    return (
        <div>
            <label htmlFor="aumentar">{num}</label>
            <button className="aumentar" onClick={aumentar}>Aumentar</button>
        </div>
    )
}

export default UsS;