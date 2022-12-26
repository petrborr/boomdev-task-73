import { useState, useEffect } from "react"

export default function Button() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `(${count})`;
    },[count]);
    return <button onClick={()=>setCount(count+1)}>
            Count ({count})    
            </button>
}