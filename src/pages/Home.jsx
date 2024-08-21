import { createContext } from "react";
import Banner from "../components/Banner";
import NewPublic from "../components/NewPublic";
import PlayList from "../components/PlayList";

function Home() {
  return (
    <>
      <Banner />
      <NewPublic />
      <PlayList title="Chill" />
      <PlayList title="Remix" />
    </>
  );
}

export default Home;
