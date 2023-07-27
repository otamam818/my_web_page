import {useState} from "react";
import Content from "./Content";

import "./styles.scss";

export const cardState = {
  opened: 1,
  closed: 2
}

function ShowcaseCard({ entry_val }) {
  const [key, val] = entry_val;
  const [currState, setCurrState] = useState(cardState.closed);

  const toggleState = () => { return (e) => {
    e.preventDefault();
    setCurrState(currState === cardState.closed
      ? cardState.opened
      : cardState.closed);
  }};

  const spacerWidth = currState === cardState.closed
    ? '0'
    : '100%';

  return (
    <>
    <div onClick={toggleState()} className="showcase-card">
      {key}
    </div>

    <div style={{width: spacerWidth}} className="showcase-card--expand">
      <div className="spacer" style={{width: spacerWidth}}></div>
      <Content data={val} />
    </div>
    </>
  );
}

export default ShowcaseCard;

