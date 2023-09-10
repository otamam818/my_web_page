import "./style.scss";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeSplash from "./WelcomeSplash";
import mePic from "./me.png" ;

function WelcomeContent () {
  return (
    <div className="welcome-content">
      <WelcomeMessage />
      <img src={mePic} alt="Me in formal wear" />
      <WelcomeSplash />
    </div>
  )
}

export default WelcomeContent;

