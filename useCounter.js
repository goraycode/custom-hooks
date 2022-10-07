import { useState } from "react"

const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => setCounter(counter + 1);
    const decrement = () => counter && setCounter(counter - 1);
    const reset = () => setCounter(initialValue);


    return {
        counter,
        increment,
        decrement,
        setCounter,
        reset
    }
}

export default useCounter;
