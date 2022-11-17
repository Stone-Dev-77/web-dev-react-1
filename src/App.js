import React, { useState } from "react"
import "./App.css"
import Counter from "./Counter"
import CounterHook from "./CounterHook"

export const themeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState("red")
  return (
    <themeContext.Provider value={{ backgroundColor : theme }}> 
      <div className="App">
        Counter #1
        <Counter initialCount={0} />
        Counter #2
        <CounterHook initialCount={0} />
        <button
          onClick={() =>
            setTheme((prevValue) => {
              return prevValue === "red" ? "blue" : "red"
            })
          }
        >
          Toggle Theme
        </button>
      </div>
    </themeContext.Provider>
  )
}

export default App
