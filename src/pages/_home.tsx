import TitleCard from "../components/TitleCard";
import homeData from "../helpers/data/homeData";

function Home() {
  return (
    <main className="home">
      <TitleCard
        data={homeData.actionCalls[0]}
        hero={true}
        imagePosition="right"
      />
      <TitleCard
        data={homeData.actionCalls[1]}
        imagePosition="left"
      />
      <TitleCard
        data={homeData.actionCalls[2]}
        imagePosition="right"
      />
    </main>
  );
}

export default Home;