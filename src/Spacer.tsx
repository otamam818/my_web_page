import { Dictionary } from "./Common/CommonTypes";

interface SpacerProps { style: Dictionary };
function Spacer ({ style } : SpacerProps) {
  return (
    <div className="spacer" style={ style }></div>
  )
}

export default Spacer;

