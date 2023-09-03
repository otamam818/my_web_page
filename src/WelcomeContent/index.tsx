import {useEffect, useRef, useState} from "react";
import "./style.scss";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeSplash from "./WelcomeSplash";
import mePic from "./me.jpeg" ;

function WelcomeContent () {
  let ref = useRef(null);
  let [currHeight, setCurrHeight] = useState<null | Number>(null);
  useEffect(() => {
    let chosenHeight;
    if (ref.current) {
      let refHeight = (ref.current as HTMLElement).offsetHeight;
      chosenHeight = ((Math.ceil(refHeight / 100) + 2) * 100) - 50
    } else {
      chosenHeight = null;
    }
    setCurrHeight(chosenHeight);
  }, [])
  return (
    <div
      className="welcome-content"
      ref={ref}
      // @ts-ignore
      style={currHeight && {height: currHeight}}
    >
      <WelcomeMessage />
      <img src={mePic} alt="me in the park" />
      <WelcomeSplash />
    </div>
  )
}

export default WelcomeContent;

