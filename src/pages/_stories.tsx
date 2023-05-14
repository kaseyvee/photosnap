import FeaturedStory from "../components/FeaturedStory";
import StoryCard from "../components/StoryCard";
import storiesData from "../helpers/data/storiesData";

function Stories() {
  const storiesList = storiesData.stories.map(story => {
    return (
      <StoryCard
        key={story.title + "story"}
        data={story}
        storiesPage={true}
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