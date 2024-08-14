import { useState } from "react";
import "./App.css";
import Sidebars from "./components/Sidebars";
import SidebarsRight from "./components/SidebarsRight";

function App() {
  return (
    <div className="flex justify-between h-screen overflow-hidden">
      <Sidebars />
      <div className="flex-1 bg-yellow-400 overflow-y-scroll">
        <div className=" h-[2000px] ">1123</div>
      </div>
      <SidebarsRight />
    </div>
  );
}

export default App;
