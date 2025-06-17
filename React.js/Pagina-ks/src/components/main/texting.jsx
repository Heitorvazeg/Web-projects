import { useState, useEffect } from "react";
import "./texting.css";

function Texting({text}) {
    const [texting, stateTexting] = useState('');

    useEffect(() =>  {
        let index = 0;
        stateTexting('');
        const interval = setInterval(() => {
            stateTexting((prev) => prev + text.charAt(index));
            index++;

            if (index >= text.length) {
                clearInterval(interval);
            }

        }, 100);
        return () => clearInterval(interval);
    }, [text])

    return  (
        <span>{texting}</span>
    );
}

export default Texting;