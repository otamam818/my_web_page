import {useEffect, useRef, useState, MouseEventHandler} from "react";
import "./Pill.scss";

interface PillProps {
  innerText?: string,
  addedClass?: string,
  clickResponse?: CallableFunction | MouseEventHandler<HTMLDivElement>,
  styleVars?: object
}

function Pill( { innerText, addedClass, clickResponse, styleVars }: PillProps ) {
  const chosenClass = `pill ${addedClass ? addedClass : ''}`;
  const [styleIsSet, setStyleIsSet] = useState(false);
  if (!clickResponse) {
    clickResponse = () => {};
  }

  const [style, setStyle] = useState({});

  const cardRef = useRef(null);
  useEffect(() => {
    if (styleVars && !styleIsSet) {
      setStyle({...style, ...styleVars});
      setStyleIsSet(true);
    }
  }, [styleVars, style, setStyle, styleIsSet, setStyleIsSet]);

  return (
    <div
      className={chosenClass}
      ref={cardRef}
      style={style}
      onClick={clickResponse as MouseEventHandler<HTMLDivElement>}
    >
      {innerText}
    </div>
  )
}

export default Pill;
