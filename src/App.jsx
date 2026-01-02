import "./App.css"
import { useState, useEffect } from "react"
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"
import Loader from "./Loader.jsx"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time - adjust the duration as needed
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <div className="container" style={{ display: isLoading ? "none" : "block" }}>
        <Header />
        <Body />
      </div>
      <Footer style={{ display: isLoading ? "none" : "block" }} />
    </>
  )
}

export default App