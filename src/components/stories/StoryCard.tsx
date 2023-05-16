import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Button";

interface StoryCardProps {
  data: {
    title: string;
    author: string;
    image: string;
    date?: string;
  };
}

function StoryCard({ data }: StoryCardProps) {
  return (
    <motion.a
      className="story-card"
      href=""
      aria-labelledby={data.title.replace(" ", "-")}
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
          {data.date && <p className="date">{data.date}</p>}
          <h2 className="story-title" id={data.title}>{data.title}</h2>
          <p className="author">by {data.author}</p>
        </header>
        <Button
          colour="white"
          text="READ STORY"
          story={true}
        />
      </div>
    </motion.a>
  );
}

export default StoryCard;