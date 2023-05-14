import Button from "./Button";

interface TitleCardProps {
  hero?: boolean;
  page: string;
  imagePosition: "left" | "right";
  data: {
    cardColour: string;
    image: string;
    title: string;
    description: string;
    buttonText?: string;
    link?: string; 
  }
}

function TitleCard({ data, hero, imagePosition, page }: TitleCardProps) {

  const colourScheme = {
    backgroundColor: data.cardColour === "black" ? "black" : "white",
    color: data.cardColour === "black" ? "white" : "black"
  }

  return (
    <div className={`title-card ${hero ? "accent" : ""} ${imagePosition}`} style={colourScheme}>
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet={`/photosnap/assets/${page}/desktop/${data.image}`}
        />
        <source
          media="(min-width: 786px)"
          srcSet={`/photosnap/assets/${page}/tablet/${data.image}`}
        />
        <img
          src={`/photosnap/assets/${page}/mobile/${data.image}`}
          alt=""
        />
      </picture>
      <div className="title-card_main">
        <div className="title-card_main_content">
          <div className="title-card_main_content_words">
            {hero ?
              <h1>{data.title}</h1>
            :
              <h2 className="header-large">{data.title}</h2>
            }
            <p>
              {data.description}
            </p>
            {data.buttonText && <Button
              link={data.link ? data.link : ""}
              text={data.buttonText}
              colour={data.cardColour === "black" ? "white" : "black"}
            />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;