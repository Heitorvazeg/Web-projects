import { useEffect } from "react";

function useE() {
    useEffect(() => {
        async function fetchData() {
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = res.json();
            console.log(data);
        }

        fetchData();

    }, []);

    return (
        <></>
    )
}

export default useE;