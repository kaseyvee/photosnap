import Button from "./Button";

interface TitleCardProps {
  hero?: boolean;
  imagePosition: "left" | "right";
  data: {
    cardColour: string;
    image: string;
    title: string;
    description: string;
    buttonText?: string;
  }
}

function TitleCard({ data, hero, imagePosition }: TitleCardProps) {

  const colourScheme = {
    backgroundColor: data.cardColour === "black" ? "black" : "white",
    color: data.cardColour === "black" ? "white" : "black"
  }

  return (
    <div className={`title-card ${hero ? "accent" : ""} ${imagePosition}`} style={colourScheme}>
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet={`/assets/home/desktop/${data.image}`}
        />
        <source
          media="(min-width: 786px)"
          srcSet={`/assets/home/tablet/${data.image}`}
        />
        <img
          src={`/assets/home/mobile/${data.image}`}
          alt=""
        />
      </picture>
      <div className="title-card_main">
        <div className="title-card_main_content">
          {hero ?
            <h1>{data.title}</h1>
          :
            <h2 className="header-large">{data.title}</h2>
          }
          <p>
            {data.description}
          </p>
          {data.buttonText && <Button
            text={data.buttonText}
            colour={data.cardColour === "black" ? "black" : "white"}
          />}
        </div>
      </div>
    </div>
  );
}

export default TitleCard;