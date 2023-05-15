import FeaturedStory from "../components/stories/FeaturedStory";
import StoryCard from "../components/stories/StoryCard";
import storiesData from "../helpers/data/storiesData";
import useScrollToTop from "../helpers/useScrollToTop";

function Stories() {
  useScrollToTop();
  
  const storiesList = storiesData.stories.map(story => {
    return (
      <StoryCard
        key={story.title + "story"}
        data={story}
      />
    );
  })

  return (
    <main className="stories page">
      <FeaturedStory data={storiesData.featuredStory} />
      <div className="stories_stories">
        {storiesList}
      </div>
    </main>
  );
}

export default Stories;