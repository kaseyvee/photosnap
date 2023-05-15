import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

interface ButtonProps {
  story?: boolean;
  className?: string;
  text: string;
  colour: string;
  border?: boolean;
  link?: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      {props.story ? (
        <span
          className={`${props.className ? props.className : ""} button button_${
            props.colour
          }${props.border ? "_border" : ""}`}
        >
          {props.text}
          {!props.border && <Arrow stroke={props.colour} />}
        </span>
      ) : (
        <Link
          to={`${props.link ? props.link : ""}`}
          className={`${props.className ? props.className : ""} button button_${
            props.colour
          }${props.border ? "_border" : ""}`}
        >
          {props.text}
          {!props.border && <Arrow stroke={props.colour} />}
        </Link>
      )}
    </>
  );
}

export default Button;
