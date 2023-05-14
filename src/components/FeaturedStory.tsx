import Button from "./Button";

interface FeaturedStoryProps {
  data: {
    title: string;
    description: string;
    date: string;
    author: string;
    image: string;
  }
}

function FeaturedStory({ data }: FeaturedStoryProps) {
  return (
    <div className="featured-story">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`/photosnap/assets/stories/desktop/${data.image}`}
        />
        <img
          src={`/photosnap/assets/stories/mobile/${data.image}`}
          alt=""
        />
      </picture>
      <div className="featured-story_main">
        <div className="featured-story_main_content">
          <p className="last-month">LAST MONTH'S FEATURED STORY</p>
          <h1>{data.title}</h1>
          <div>
            <span className="date">{data.date}</span>
            <span className="author"> {data.author}</span>
          </div>
          <p className="featured-story_main_content_description">{data.description}</p>
          <Button text="READ THE STORY" colour="white" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedStory;