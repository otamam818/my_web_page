import "./style.scss";
import data from "./data.txt";
import {useState} from "react";

function About() {
  const [text, setText] = useState(null);
  fetch(data)
    .then(res => res.text())
    .then(text => setText(text));

  return (
    <div className="about spread">
      <div className="spacer" style={{'--spacer-width': '60vw'}}></div>
        {text}
      <div className="spacer" style={{'--spacer-width': '30vw'}}></div>
    </div>
  );
}

export default About;
