import Button from "./Button";

interface StoryCardProps {
  data: {
    title: string;
    author: string;
    image: string;
  }
}

function StoryCard({ data }: StoryCardProps) {
  return (
    <div className="story-card">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`/assets/stories/desktop/${data.image}`}
        />
        <img
          src={`/assets/stories/mobile/${data.image}`}
          alt=""
        />
      </picture>
      <div className="story-card_main">
        <header>
          <h2 className="story-title">{data.title}</h2>
          <p>by {data.author}</p>
        </header>
        <Button
          colour="white"
          text="READ STORY"
        />
      </div>
    </div>
  );
}

export default StoryCard;