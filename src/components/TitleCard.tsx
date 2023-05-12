import Button from "./Button";

interface TitleCardProps {
  hero: boolean;
  cardColour: string;
  image: string;
  title: string;
  description: string;
  buttonText?: string;
}

function TitleCard(props: TitleCardProps) {

  const colourScheme = {
    backgroundColor: props.cardColour === "black" ? "black" : "white",
    color: props.cardColour === "black" ? "white" : "black"
  }

  return (
    <div className="title-card" style={colourScheme}>
      <picture>
        <source
          media="(min-width: 1100px)"
          srcSet={`/assets/home/desktop/${props.image}`}
        />
        <source
          media="(min-width: 786px)"
          srcSet={`/assets/home/tablet/${props.image}`}
        />
        <img
          src={`/assets/home/mobile/${props.image}`}
          alt=""
        />
      </picture>
      <div className="title-card_main">
        {props.hero ?
          <h1>{props.title}</h1>
        :
          <h2 className="header-large">{props.title}</h2>
        }
        <p>
          {props.description}
        </p>
        {props.buttonText &&  <Button
          text={props.buttonText}
          colour={props.cardColour === "black" ? "black" : "white"}
        />}
      </div>
    </div>
  );
}

export default TitleCard;