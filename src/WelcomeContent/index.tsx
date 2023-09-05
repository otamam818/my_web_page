import {useRef} from "react";
import "./style.scss";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeSplash from "./WelcomeSplash";
import mePic from "./me.png" ;

function WelcomeContent () {
  const ref = useRef(null);
  return (
    <div
      className="welcome-content"
      ref={ref}
    >
      <WelcomeMessage />
      <img src={mePic} alt="me in the park" />
      <WelcomeSplash />
    </div>
  )
}

export default WelcomeContent;

