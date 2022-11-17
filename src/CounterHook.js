import React, { useContext, useState } from "react";
import { themeContext } from "./App";



export default function CounterHook({ initialCount }) {
    const [count, setCount] = useState(initialCount)
    const style = useContext(themeContext)
    return (
        <div>
            <button style={style} onClick={() => setCount(prevState => prevState - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setCount(prevState => prevState + 1)}>+</button>
        </div>
    )
}