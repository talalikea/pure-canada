import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Programs from "./components/Programs";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

// Empty string = same-origin requests (used in production where the API is served
// from the same Express app). Set VITE_API_URL for local development across ports.
const API_URL = import.meta.env.VITE_API_URL || "";

function App() {
  const [apiStatus, setApiStatus] = useState("checking...");

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus("offline"));
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Impact />
        <Programs />
        <About />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer apiStatus={apiStatus} />
    </div>
  );
}

export default App;
