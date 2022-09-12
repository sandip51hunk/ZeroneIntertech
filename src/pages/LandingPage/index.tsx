import React from "react";
import Footer from "../../components/Navigation/Footer";
import { About, AppStore, Contact, Intro, Network, Shippers } from "../index";

function LandingPage() {
  return (
    <>
      <Intro />
      <About />

      <Shippers />
      <Network />
      <Contact />
      <AppStore />
      <Footer />
    </>
  );
}

export default LandingPage;
