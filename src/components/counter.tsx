"use client"
import {useState} from "react";

export default function Counter() {
    const [count,setCount] = useState(1)

    return (
        <button onClick={() => {
            setCount(count + 1);
        }}>{count}</button>
    )
}