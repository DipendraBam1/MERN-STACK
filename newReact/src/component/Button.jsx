export default function Button(props) {
  let className = "btn ";
  if (props.size == "sm") {
    className += "btn-sm";
  } else if (props.size == "lg") {
    className += "btn-lg";
  }
  if (props.rounded == "rounded") {
    className += " rounded";
  }
  return (
    <button onClick={props.onClick} className={className}>
      {props.label}
    </button>
  );
}
