import "./style.scss";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeSplash from "./WelcomeSplash";

function WelcomeContent () {
  return (
    <div className="welcome-content">
      <WelcomeMessage />
      <img src={require("./me.jpeg")} alt="me in the park" />
      <WelcomeSplash />
    </div>
  )
}

export default WelcomeContent;

