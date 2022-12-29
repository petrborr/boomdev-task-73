import "./App.css";
import { useState, useEffect } from "react"

function App() {

  function Button() {
    const [count, setCount] = useState(1)
    useEffect(() => {
      document.title = `(${count})`;
    },[count]);
    return <button onClick={()=>setCount(count+1)}>Count({count})</button>
  }
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          Edit the <code>./src</code> folder to add components.
          <Button/>
        </div>
      </div>
    </div>
  );
}

export default App;
