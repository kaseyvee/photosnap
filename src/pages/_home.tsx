import FeatureCard from "../components/FeatureCard";
import StoryCard from "../components/StoryCard";
import TitleCard from "../components/TitleCard";
import homeData from "../helpers/data/homeData";
import useScrollToTop from "../helpers/useScrollToTop";

function Home() {
  useScrollToTop();
  
  const featuredStories = homeData.stories.map(story => {
    return <StoryCard key={story.title} data={story} />
  });

  const features = homeData.features.map(feature => {
    return <FeatureCard key={feature.title} data={feature} />
  })

  return (
    <main className="home page">
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
      <div className="home_features">
        <div className="wrapper">
          {features}
        </div>
      </div>
    </main>
  );
}

export default Home;