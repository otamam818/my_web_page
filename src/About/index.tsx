import "./style.scss";
import data from "./data.txt";
import {useState, CSSProperties} from "react";

function About() {
  const [text, setText] = useState<string | null>(null);
  fetch(data)
    .then(res => res.text())
    .then(text => setText(text));

  return (
    <div className="about spread">
      <div className="spacer" style={({'--spacer-width': '60vw'}) as CSSProperties}></div>
        {text}
      <div className="spacer" style={({'--spacer-width': '30vw'}) as CSSProperties}></div>
    </div>
  );
}

export default About;
