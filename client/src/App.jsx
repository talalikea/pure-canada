import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DonationButton from "./components/DonationButton";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

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
      <main className="hero">
        <h2>Help us rebuild lives and restore hope across Canada.</h2>
        <p>
          Pure Canada supports individuals and families recovering from hardship,
          providing resources, community, and a path forward.
        </p>
        <DonationButton className="donate-button--large" />
        <p style={{ fontSize: "12px", color: "#999" }}>API status: {apiStatus}</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
