import FeatureCard from "../components/features/FeatureCard";
import StoryCard from "../components/stories/StoryCard";
import TitleCard from "../components/TitleCard";
import homeData from "../helpers/data/homeData";
import useScrollToTop from "../helpers/useScrollToTop";

function Home() {
  useScrollToTop();

  const featuredStories = homeData.stories.map((story) => {
    return (
      <StoryCard data={story} key={story.title} />
    )
  });

  const features = homeData.features.map((feature) => {
    return (
      <li key={feature.title}>
        <FeatureCard data={feature} />
      </li>
    )
  });

  return (
    <main className="home page">
      <TitleCard
        data={homeData.actionCalls[0]}
        hero={true}
        imagePosition="right"
        page="home"
      />
      <TitleCard
        data={homeData.actionCalls[1]}
        imagePosition="left"
        page="home"
      />
      <TitleCard
        data={homeData.actionCalls[2]}
        imagePosition="right"
        page="home"
      />
      <ul aria-label="Stories" className="home_stories">{featuredStories}</ul>
      <div className="home_features">
        <ul aria-label="Features" className="wrapper">{features}</ul>
      </div>
    </main>
  );
}

export default Home;
