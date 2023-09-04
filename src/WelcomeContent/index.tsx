import {useEffect, useRef, useState, CSSProperties} from "react";
import "./style.scss";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeSplash from "./WelcomeSplash";
import mePic from "./me.jpeg" ;

function WelcomeContent () {
  const ref = useRef(null);
  const [currHeight, setCurrHeight] = useState<null | number>(null);
  useEffect(() => {
    let chosenHeight;
    if (ref.current) {
      const refHeight = (ref.current as HTMLElement).offsetHeight;
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
      style={(currHeight && {height: currHeight}) as CSSProperties}
    >
      <WelcomeMessage />
      <img src={mePic} alt="me in the park" />
      <WelcomeSplash />
    </div>
  )
}

export default WelcomeContent;

