import StoryCard from "../components/StoryCard";
import TitleCard from "../components/TitleCard";
import homeData from "../helpers/data/homeData";

function Home() {
  const featuredStories = homeData.stories.map(story => {
    return <StoryCard key={story.title} data={story} />
  });

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
      <div className="home_stories">
        {featuredStories}
      </div>
    </main>
  );
}

export default Home;