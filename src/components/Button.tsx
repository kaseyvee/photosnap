import { ReactComponent as Arrow } from "../assets/arrow.svg";

interface ButtonProps {
  className?: string;
  text: string;
  colour: string;
  border?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <a href="" className={`${props.className ? props.className : ""} button button_${props.colour}${props.border ? "_border" : ""}`}>
      {props.text}
      {!props.border && <Arrow stroke={props.colour}/>}
    </a>
  );
}

export default Button;