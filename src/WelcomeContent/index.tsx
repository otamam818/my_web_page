import {useEffect, useRef, useState} from "react";
import "./style.scss";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeSplash from "./WelcomeSplash";
import mePic from "./me.jpeg" ;

function WelcomeContent () {
  let ref = useRef(null);
  let [currHeight, setCurrHeight] = useState(null);
  useEffect(() => {
    setCurrHeight(((Math.ceil(ref.current.offsetHeight / 100) + 2) * 100) - 50);
  }, [])
  return (
    <div
      className="welcome-content"
      ref={ref}
      style={currHeight && {height: currHeight}}
    >
      <WelcomeMessage />
      <img src={mePic} alt="me in the park" />
      <WelcomeSplash />
    </div>
  )
}

export default WelcomeContent;

