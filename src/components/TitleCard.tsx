import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Button from "./Button";

interface TitleCardProps {
  hero?: boolean;
  page: string;
  imagePosition: "left" | "right";
  data: {
    cardColour: string;
    image?: string;
    title: string;
    description: string;
    buttonText?: string;
    link?: string;
  };
}

function TitleCard({ data, hero, imagePosition, page }: TitleCardProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px" });

  const colourScheme = {
    backgroundColor: data.cardColour === "black" ? "black" : "white",
    color: data.cardColour === "black" ? "white" : "black",
  };


  return (
    <div
      className={`title-card ${hero ? "accent" : ""} ${imagePosition}`}
      style={colourScheme}
    >
      {data.image && <picture>
        <source
          media="(min-width: 1100px)"
          srcSet={`/photosnap/assets/${page}/desktop/${data.image}`}
        />
        <source
          media="(min-width: 786px)"
          srcSet={`/photosnap/assets/${page}/tablet/${data.image}`}
        />
        <img src={`/photosnap/assets/${page}/mobile/${data.image}`} alt="" />
      </picture>}
      <div className="title-card_main">
        <div className="title-card_main_content">
          <motion.div
            className="title-card_main_content_words"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={isMobile ? { opacity: 1, y: [-100, 0]} : { opacity: 1, x: [-100, 0]}}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            {hero ? (
              <h1>{data.title}</h1>
            ) : (
              <h2 className="header-large">{data.title}</h2>
            )}
            <p>{data.description}</p>
            {data.buttonText && (
              <Button
                link={data.link ? data.link : ""}
                text={data.buttonText}
                colour={data.cardColour === "black" ? "white" : "black"}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
