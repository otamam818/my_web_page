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
  const [styleVars, setStyleVars] = useState(getStyleVars(entry_val));
  const isClosed = currState === cardState.closed;

  let parsedStyles = {...styleVars};
  Object.entries(entry_val[1]).forEach((value) => {
    const [innerKey, innerVal] = value; 
    const parsedStylesClone = { ...parsedStyles };
    if (innerKey.startsWith('--') ) {
      // A deep copy is not required as it just represents string-based data
      if (parsedStyles[innerKey] === undefined) {
        parsedStylesClone[innerKey] = innerVal;
      }
      parsedStylesClone.hasBeenParsed = true;
      parsedStyles = parsedStylesClone;
      return;
    }
    parsedStylesClone.hasBeenParsed = true;
    parsedStyles = parsedStylesClone;
  });

  if (!styleVars.hasBeenParsed) {
    setStyleVars(parsedStyles);
  }

  const toggleState = () => { return (e) => {
    e.preventDefault();
    setCurrState(isClosed ? cardState.opened : cardState.closed);
  }};

  const spacerWidth = isClosed
    ? '0'
    : '100%';

  const spacerStyle = isClosed
    ? {width: `0`, display: 'none'}
    : {width: '100%', display: 'inline'};

  const cardClass = `showcase-card${isClosed ? '' : ' expanded'}  card`;
  return (
    <>
    <div className="spacer" style={spacerStyle}></div>

    <div
      onClick={toggleState()}
      className={cardClass}
      style={styleVars}
    >
      {key}
    </div>

    <div className="spacer" style={spacerStyle}></div>
    <div style={{width: spacerWidth}} className="showcase-card--expand">
      <Content data={val} isClosed={isClosed} />
    </div>
    </>
  );
}

function getStyleVars(entry_val) {
  // Get the maximum width for fitting all words in the card appropriately
  let width = Math
    .max(...entry_val[0]
      .split(' ')
      .map((value) => value.length))
  return {hasBeenParsed: false, "--initWidth": `${width}ch`}
}

export default ShowcaseCard;

