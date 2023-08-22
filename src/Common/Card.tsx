import {useEffect, useRef, useState} from "react";

// NOTE: `define` represents the option to define values like width, height,
// etc into the element for the transition to be smooth
function Card( { innerText, addedClass, clickResponse, define } ) {
  const chosenClass = `card ${addedClass ? addedClass : ''}`;
  const [styleIsSet, setStyleIsSet] = useState(true);
  if (!clickResponse) {
    clickResponse = () => {};
  }

  const [style, setStyle] = useState({});

  const cardRef = useRef(null);
  useEffect(() => {
    if (define && styleIsSet) {
      setStyle({...style, height: `${cardRef.offsetHeight}px`});
      setStyleIsSet(false);
    }
  }, [define, cardRef, style, setStyle, styleIsSet, setStyleIsSet]);

  return (
    <div
      className={chosenClass}
      ref={cardRef}
      style={style}
      onClick={clickResponse()}
    >
      {innerText}
    </div>
  )
}

export default Card;
