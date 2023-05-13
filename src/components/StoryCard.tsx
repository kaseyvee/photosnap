import Button from "./Button";
import { motion } from "framer-motion";

interface StoryCardProps {
  data: {
    title: string;
    author: string;
    image: string;
  }
}

function StoryCard({ data }: StoryCardProps) {
  return (
    <motion.div
      className="story-card"
      whileHover={{ y: -20 }}
      whileFocus={{ y: -20 }}
    >
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
      <div className="story-card_main">
        <header>
          <h2 className="story-title" id="story-title">{data.title}</h2>
          <p>by {data.author}</p>
        </header>
        <Button
          colour="white"
          text="READ STORY"
          story={true}
        />
      </div>
      <a
        href=""
        aria-labelledby="story-title"
        className="story-card_link"
      >
      </a>
    </motion.div>
  );
}

export default StoryCard;