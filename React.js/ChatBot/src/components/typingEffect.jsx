import {useState, useEffect} from "react";

const TypingEffect = ({text}) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        const speed = 100;

        const interval = setInterval(() => {
            if (index < text.length){
                setDisplayText((prev) => prev + text.charAt(index));
                index++
            }
            else {
                clearInterval(interval);
            }   
        }, speed)

    return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>
}

export default TypingEffect;