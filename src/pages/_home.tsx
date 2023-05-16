import FeatureCard from "../components/features/FeatureCard";
import StoryCard from "../components/stories/StoryCard";
import TitleCard from "../components/TitleCard";
import homeData from "../helpers/data/homeData";
import useScrollToTop from "../helpers/useScrollToTop";

function Home() {
  useScrollToTop();

  const featuredStories = homeData.stories.map((story) => {
    return (
      <StoryCard key={story.title} data={story} />
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
      <div aria-label="stories" className="home_stories">{featuredStories}</div>
      <div className="home_features">
        <ul aria-label="features" className="wrapper">{features}</ul>
      </div>
    </main>
  );
}

export default Home;
