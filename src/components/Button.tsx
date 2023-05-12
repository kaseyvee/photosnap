import arrow from "../assets/arrow.svg";

interface ButtonProps {
  className?: string;
  text: string;
  colour: string;
  border?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <a href="" className={`${props.className} button button_${props.colour}${props.border && "_border"}`}>
      {props.text}
      {!props.border && <img src={arrow} alt="" />}
    </a>
  );
}

export default Button;