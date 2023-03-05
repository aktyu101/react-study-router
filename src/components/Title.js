import "./Title.css";
import classNames from "classnames";

export default function Title({ text }) {
  const titleClass = classNames("title");
  return <h1 className={titleClass}>{text}</h1>;
}
