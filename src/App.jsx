import { useState } from "react";
import "./App.css";
import Sidebars from "./components/Sidebars";
import SidebarsRight from "./components/SidebarsRight";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NewPublic from "./components/NewPublic";

function App() {
  return (
    <>
      <div className="flex justify-between h-screen overflow-hidden">
        <Sidebars />
        <div className="flex-1 bg-[#170f23] overflow-y-scroll">
          <Header />
          <Banner />
          <NewPublic />
        </div>
        <SidebarsRight />
      </div>
    </>
  );
}

export default App;
