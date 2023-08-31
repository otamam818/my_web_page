import {useRef, ReactNode} from "react";

// NOTE: `define` represents the option to define values like width, height,
// etc into the element for the transition to be smooth
// const HEIGHT_OFFSET = -321;
interface CardProps {
 innerText?: ReactNode,
 addedClass?: string,
 clickResponse?: CallableFunction,
 define?: boolean
}
function Card( { innerText, addedClass, clickResponse, define }: CardProps ) {
  const chosenClass = `card ${addedClass ? addedClass : ''}`;
  // const [styleIsSet, setStyleIsSet] = useState(true);
  if (!clickResponse) {
    clickResponse = () => {};
  }

  // const [style, setStyle] = useState({});

  const cardRef = useRef<HTMLDivElement>(null);
  /**
  useEffect(() => {
    if (define && styleIsSet ) {
      var heightVal: number = cardRef.current?.offsetHeight as number;
      heightVal += HEIGHT_OFFSET;
      const height = heightVal + 'px';
      setStyle({ ...style, height });
      setStyleIsSet(false);
    }
  }, [define, cardRef, style, setStyle , styleIsSet, setStyleIsSet ]);
  */

  return (
    <div
      className={chosenClass}
      ref={cardRef}
      // style={style}
      onClick={clickResponse()}
    >
      {innerText}
    </div>
  )
}

export default Card;
