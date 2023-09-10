import {useEffect, useState} from "react";
import "./style.scss";

const cardData = [
  {
    title: "Projects",
    subtitle: "How I contribute to the world",
    link: "https://github.com/otamam818?tab=repositories"
  },
  {
    title: "LinkedIn",
    subtitle: "My professional profile",
    link: "https://www.linkedin.com/in/tahmin-ahmed-5998a0200/"
  },
  {
    title: "E-Resume",
    subtitle: "(Desktop only) General info about who I am",
    link: "https://otamam818.github.io/ResumePlus/"
  }
];

const allPositions = {
  default: 'default',
  topBar: 'top-bar'
}

const THRESHOLD_HEIGHT = 0.65 * window.innerHeight;

function InfoCards() {
  const cardComponents = cardData.map((value, index) => <Card key={index} {...value} />)
  const [cardPosition, setCardPosition] = useState(allPositions.default);

  // Checks whether the observer has been spotted or not
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > (THRESHOLD_HEIGHT)) {
        setTimeout(() => setCardPosition(allPositions.topBar), 200);
      } else {
        setTimeout(() => setCardPosition(allPositions.default), 200);
      }
    })
  }, [setCardPosition]);

  return (
    <>
    <div className={`info-cards ${cardPosition}`}>
      {cardComponents}
    </div>
    <div className={`info-cards--${cardPosition}`}></div>
    </>
  )
}

interface CardProps {
  title: string,
  subtitle: string,
  link: string,
}
function Card( { title, subtitle, link }: CardProps ) {
  return (
    <a href={link}>
      <div className="card">
        <h1> {title} </h1>
        <span> {subtitle} </span>
      </div>
    </a>
  )
}

export default InfoCards;

