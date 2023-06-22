import {useEffect, useRef, useState} from "react";
import "./style.scss";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeSplash from "./WelcomeSplash";

function WelcomeContent () {
  let ref = useRef(null);
  let [currHeight, setCurrHeight] = useState(null);
  useEffect(() => {
    console.log(ref);
    setCurrHeight(((Math.ceil(ref.current.offsetHeight / 100) + 2) * 100) - 50);
  }, [])
  return (
    <div
      className="welcome-content"
      ref={ref}
      style={currHeight && {height: currHeight}}
    >
      <WelcomeMessage />
      <img src={require("./me.jpeg")} alt="me in the park" />
      <WelcomeSplash />
    </div>
  )
}

export default WelcomeContent;

