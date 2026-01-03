import "./App.css"
import { useState, useEffect } from "react"
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"
import Loader from "./Loader.jsx"
import useImagePreloader from "./useImagePreloader.jsx"

function App() {
  // List of critical images to preload
  const criticalImages = [
    "/Coder.png", // Hero image
    "/c.png",
    "/py.png",
    "/html.png",
    "/css.png",
    "/js.png",
    "/React.png",
    "/git.png",
    "/vs.png",
    "/vite.png",
    "/Udemy.png",
    "/aws.jpg"
  ];

  const imagesLoaded = useImagePreloader(criticalImages);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imagesLoaded) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

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