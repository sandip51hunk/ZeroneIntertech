import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Navigation/Footer";
import { Header } from "./components/Navigation/Header/Header";
import { About, Contact, Intro, Network, Shippers } from "./pages";

function App() {
  return (
    <div className="App px-10 mx-10">
      <Header />
      <Intro />
      <About />

      <Network />
      <Contact />
      {/* <Shippers /> */}
      <Footer />
    </div>
  );
}

export default App;
