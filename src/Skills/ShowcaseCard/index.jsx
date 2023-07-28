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

  const isClosed = currState === cardState.closed;

  const toggleState = () => { return (e) => {
    e.preventDefault();
    setCurrState(isClosed
      ? cardState.opened
      : cardState.closed);
  }};

  const spacerWidth = isClosed
    ? '0'
    : '100%';

  const cardClass = `showcase-card${isClosed ? '' : ' expanded'}  card`;
  return (
    <>
    <div className="spacer" style={{width: spacerWidth}}></div>

    <div onClick={toggleState()} className={cardClass}>
      {key}
    </div>

    <div className="spacer" style={{width: spacerWidth}}></div>
    <div style={{width: spacerWidth}} className="showcase-card--expand">
      <Content data={val} isClosed={isClosed} />
    </div>
    </>
  );
}

export default ShowcaseCard;

